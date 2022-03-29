import React from "react";
import { Header } from "Components/Layout/Header/Header";
import { DivShadow } from "Components/StyleComponets/DivShadow";
import { Title } from "Components/StyleComponets/Titlte";
import { CardUser } from "Components/Ui/CardUser/CardUser";
import { PhotoUserProfile } from "Components/Ui/PhotoUserProfile/PhotoUserProfile";

import './Chat.css';
import { CardMessage } from "Components/Ui/CardMessage/CardMessage";
import { InputText } from "Components/Ui/InputText/InputText";
import { ButtonSend } from "Components/Ui/ButtonSend/ButtonSend";

export const Chat = () => {
    const profile = {
        color: "#236d36",
        imageprofile: "",
        name: "Jose Maria",
        email: "carlos@gmail.com",
        phone: "3166529009",
        calification: 73.6
    }

    const message = {
        message: "Hola solicito servicio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, amet atque quam cum eligendi provident beatae rem odio totam magnam!",
        date: "feb 29 2022"
    }

    const message2 = {
        message: "Hola solicito servicio Lorem ipsum dolor sit amet consectetur, am!",
        date: "feb 29 2022"
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
                            <CardUser infoUser={profile} nameService='Servicios sexuales'/>
                            <CardUser infoUser={profile} nameService='Servicios sexuales'/>                      
                        </div>
                    </DivShadow>

                    <DivShadow className='main_messages'>
                        <div className="header_messages_chat">
                            <div className="information_user_header_chat">
                                <PhotoUserProfile infoProfile={profile} small={false} style='small_profile' />
                                <p className="name_user_header_chat">{profile.name}</p>
                            </div>
                        </div>
                        <div className="main_messages_chat">
                            <div className="messages_chat">
                                <CardMessage info={message} location='in'/>
                                <CardMessage info={message} location='out'/>
                                <CardMessage info={message2} location='out'/>
                                <CardMessage info={message} location='in'/>
                            
                            </div>
                            <div className="input_message_chat">
                                <InputText placeholder='Mensaje...'/>
                                <ButtonSend onClick={e => console.log(e)} />
                            </div>
                        </div>                   
                    </DivShadow>
                </div>
            </main>
        </>
    )
}