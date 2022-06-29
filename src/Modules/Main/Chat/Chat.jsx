import React, { useContext, useEffect, useRef, useState } from "react";
import { Header } from "Components/Layout/Header/Header";
import { DivShadow } from "Components/StyledComponets/DivShadow";
import { Title } from "Components/StyledComponets/Titlte";
import { CardUser } from "Components/Ui/Cards/CardUser/CardUser";
import { PhotoUserProfile } from "Components/Ui/PhotoUserProfile/PhotoUserProfile";
import { CardMessage } from "Components/Ui/Cards/CardMessage/CardMessage";
import { ButtonSend } from "Components/Ui/ButtonSend/ButtonSend";
import { InputText } from "Components/Ui/InputText/InputText";
import { useChat } from "CustomHooks/useChat";
import IconMessageChat from 'Assets/Icons/IconMessageChat.png'
import { UserContext } from "Context/UserContext";
import { LoadingCardUser } from "Components/Ui/LoadingCardUser/LoadingCardUser";

import './Chat.css';
import { AddCualification } from "Components/Layout/AddCualification/AddCualification";
import { DivPopUp } from "Components/StyledComponets/DivPopUp";
import ReactStars from "react-rating-stars-component";
import { Button } from "Components/Ui/Button/Button";

export const Chat = () => {

    const chatRef = useRef()
    const [message, setMessage] = useState()
    const [chats, setChats] = useState()
    const [popupAddQualification, setPopupAddQualification] = useState(false)
    const [currentChat, setCurrentChat] = useState(null);
    const { connectionRoom, sendMessage, closeConnection, messages } = useChat()
    const { getJwt, user, sendNotification } = useContext(UserContext)

    const [isLoading, setIsLoading] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        fetch(`${process.env.REACT_APP_API_CS}/Room/chats/${getJwt()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(response => {
                setChats(response)
                // console.log(response);
            }).finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
        if (chatRef && chatRef.current) {
            const { scrollHeight, clientHeight } = chatRef.current;
            chatRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
        }
    }, [messages])

    const DateNow = () => {
        const current = new Date();
        return current;
    }

    const sendQualification = (qualification) => {
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/addQualification`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JSW ${getJwt()}`
            },
            body: JSON.stringify({
                qualification: qualification,
                serviceId: currentChat.idservicio
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch()
            .finally()
    }

    return (
        <>
            <DivPopUp isOpen={popupAddQualification}>
                <div className="ceneter_popup_add_cualification">
                    <DivShadow className="add_service_cualification">
                        <h1 className="title_service_cualification">Calificación del servicio</h1>
                        <p className="information_service_cualification">Nivel de satisfacción con el servicio adquirido o ofrecido</p>
                        <div className="select_cualification">

                            <ReactStars
                                count={5}
                                onChange={(value) => sendQualification(value)}
                                size={40}
                                activeColor="#14A2D6"
                            />
                        </div>
                        <div className="actions_add_service_cualification">
                            <Button value="Cancelar" onClick={() => setPopupAddQualification(false)} />
                            <Button value="Enviar calificación" />
                        </div>
                    </DivShadow>
                </div>
            </DivPopUp>

            <Header />
            <main className="main_chat">
                <div className="center_chat">
                    <DivShadow className='aside_chat'>
                        <div className="header_aside_chat">
                            <Title>Chat</Title>
                        </div>
                        <div className="cards_aside_chat">
                            {
                                isLoading ?
                                    <>
                                        <LoadingCardUser />
                                        <LoadingCardUser />
                                    </>
                                    :
                                    chats ?
                                        chats.map((item, index) => (
                                            <CardUser key={index} infoUser={item} onClick={() => {
                                                closeConnection()
                                                connectionRoom(item.idsala)
                                                setCurrentChat(item)
                                            }} />
                                        ))
                                        :

                                        <h1>No tienes chats</h1>
                            }

                        </div>
                    </DivShadow>
                    {
                        currentChat ?
                            <DivShadow className='main_messages'>
                                <div className="header_messages_chat">
                                    <div className="information_user_header_chat">
                                        <PhotoUserProfile infoProfile={{ name: currentChat.nombres, color: currentChat.color, userPicture: currentChat.fotop }} small={false} style='small_profile' />
                                        <p className="name_user_header_chat">{currentChat.nombres}</p>
                                    </div>
                                    <Button value='Finalizar conversación' onClick={() => setPopupAddQualification(true)} />
                                </div>
                                <div className="main_messages_chat">
                                    <div ref={chatRef} className="messages_chat">

                                        {
                                            messages.length > 0 ?
                                                messages.map((item, index) => (
                                                    <CardMessage key={index} info={item} user={user.info[0].name} />
                                                ))
                                                :
                                                <div className="conversation_message">
                                                    <p className="test_conversation_message">Iniciar una conversación con {currentChat.nombres}</p>
                                                </div>
                                        }

                                    </div>

                                    <div className="container_input_message_chat">
                                        <form onSubmit={e => {
                                            e.preventDefault()
                                            setMessage('')
                                        }} className="input_message_chat">
                                            <InputText placeholder='Mensaje...' onChange={e => setMessage(e.target.value)} value={message} />
                                            <ButtonSend onClick={() => {
                                                sendNotification(currentChat.idusuario, message, user.info[0].name, user.info[0].color, user.info[0].userPicture)
                                                sendMessage(
                                                    message,
                                                    user.info[0].name,
                                                    getJwt(),
                                                    DateNow()
                                                )
                                                setMessage('')
                                            }
                                            } />
                                        </form>
                                    </div>
                                </div>
                            </DivShadow>
                            :
                            <DivShadow className='main_messages'>
                                <div className="message_chat">
                                    <img className='icon_message_chat' src={IconMessageChat} alt="" />
                                    <p className="title_app_info_chat">Work 4 hours</p>
                                    <div className="info_chat">
                                        Inicia una conversación con otros usuarios para concretar los términos del servicio
                                    </div>
                                </div>
                            </DivShadow>
                    }
                </div>
            </main>
        </>
    )
}