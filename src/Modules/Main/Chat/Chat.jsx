import React, { useContext, useEffect, useState } from "react";
import { Header } from "Components/Layout/Header/Header";
import { DivShadow } from "Components/StyleComponets/DivShadow";
import { Title } from "Components/StyleComponets/Titlte";
import { CardUser } from "Components/Ui/CardUser/CardUser";
import { PhotoUserProfile } from "Components/Ui/PhotoUserProfile/PhotoUserProfile";
import { CardMessage } from "Components/Ui/CardMessage/CardMessage";
import { ButtonSend } from "Components/Ui/ButtonSend/ButtonSend";
import { InputText } from "Components/Ui/InputText/InputText";
import { useChat } from "CustomHooks/useChat";
import IconMessageChat  from 'Assets/Icons/IconMessageChat.png'
import { UserContext } from "Context/UserContext";

import './Chat.css';

export const Chat = () => {

    const [message, setMessage] = useState()
    const [chats, setChats] = useState() 
    const [currentChat, setCurrentChat] = useState(null);

    // Hook Chat
    const { connectionRoom, sendMessage, closeConnection, messages } = useChat()
    
    const { getJwt, user } = useContext(UserContext) 

    useEffect(()=> {
        fetch(`https://workforhours-api.somee.com/Room/chats/${getJwt()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response.json())
        .then(response => { 
            setChats(response)
        })
    },[])

    const rooms = [
        {
          apellidos: "Garcia",
          nombres: "Juan",
          fotop: "https://pbs.twimg.com/media/EkAcuwFWAAYchiz.jpg",
          idusuario: 28,
          idsala: "1",
          nombreservicio: "Pinto casas a domicilio",
          foto: "",
          idservicio: 1
        },
        {
          apellidos: "Torres",
          nombres: "David",
          fotop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3cNYfl7_TJj0XTzWiHJQr7Dz_PXvZBPsq4cQQzXzvh3BUOjfwa1XlRnzG9CHZ48eXoM&usqp=CAU",
          idusuario: 30,
          idsala: "4",
          nombreservicio: "Pinto casas a domicilio",
          foto: "",
          idservicio: 1
        },
        {
          apellidos: "Florez",
          nombres: "Majo",
          fotop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3cNYfl7_TJj0XTzWiHJQr7Dz_PXvZBPsq4cQQzXzvh3BUOjfwa1XlRnzG9CHZ48eXoM&usqp=CAU",
          idusuario: 36,
          idsala: "2",
          nombreservicio: "Podar Jardines",
          foto: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg",
          idservicio: 2
        }
    ]

    const profile = {
        color: "#236d36",
        imageprofile: "",
        name: "Jose Maria",
        email: "carlos@gmail.com",
        phone: "3166529009",
        calification: 73.6,
        room: "3"
    }

    const message2 = {
        message: "Hola solicito servicio Lorem ipsum dolor sit amet consectetur, am!",
        date: "feb 29 2022"
    }

    const DateNow = () => {
        const current = new Date();
        return current.toDateString();
    }

    return (
        <>
            <Header />
            <main className="main_chat">
                <div className="center_chat">
                    <DivShadow className='aside_chat'>
                        <div className="header_aside_chat">
                            <Title>Chat</Title>
                        </div>
                        <div className="cards_aside_chat">
                            {
                                chats?.map((item, index) => (
                                    <CardUser key={index} infoUser={item} onClick={() => { 
                                        closeConnection()
                                        connectionRoom(item.idsala)
                                        setCurrentChat(item)
                                    }} />
                                ))
                            }
                        </div>
                    </DivShadow>

                    {
                        currentChat ?
                            <DivShadow className='main_messages'>
                                <div className="header_messages_chat">
                                    <div className="information_user_header_chat">
                                        <PhotoUserProfile infoProfile={profile} small={false} style='small_profile' />
                                        <p className="name_user_header_chat">{currentChat.nombres}</p>
                                    </div>
                                </div>
                                <div className="main_messages_chat">
                                    <div className="messages_chat">
                                        {
                                            messages?.map((item, index) => (
                                                <CardMessage key={index} info={item} user={user.info[0].name} />
                                            ))
                                        }
                                    
                                    </div>
                                    <div className="">
                                        <form onSubmit={e => {
                                            e.preventDefault()
                                            setMessage('')    
                                        }} className="input_message_chat">    
                                            <InputText placeholder='Mensaje...' onChange={e =>setMessage(e.target.value)} value={message}/>
                                            <ButtonSend onClick={() => { 
                                                    sendMessage(
                                                        message, 
                                                        user.info[0].name,
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
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, sunt!
                                    </div>
                                </div>      
                            </DivShadow>
                    }


                </div>
            </main>
        </>
    )
}