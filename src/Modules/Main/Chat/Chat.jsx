import React, {useEffect, useState} from "react";
import { Header } from "Components/Layout/Header/Header";
import { ChatUserCard } from "Components/Ui/ChatUserCard/ChatUserCard";
import { MessageCard } from "Components/Ui/MessageCard/MessageCard";
import { verifyTypeOfLogin } from 'Functions/ReusableFunctions'
import './Chat.css';

const API = process.env.REACT_APP_API;

export const Chat = () => {

    const [selectedChat, setSelectedChat] = useState([])
    const [userMessage, setUserMessage] = useState()
    const [userData, setUserData] = useState({})
    const [hallId, setHallId] = useState(1)
    const [messages, setMessages] = useState([{
        idmensaje: 1,
        mensaje: "hola",
        fecha: "01/01/01",
        idusuario: 1,
        idsala: 1
    }])
    const [userRawChats, setRawUserChats] = useState(
        [[12,"David","07/11/2021"],
        [1,"Camilo","07/11/2021"],
        [2,"Juan","07/11/2021"]]
        )

    const getUserInSessionData = () =>{
        let getRawData = localStorage.getItem('userData')
        
        if(getRawData !== null || getRawData !== ""){
            setUserData(JSON.parse(getRawData))
            const newUserData = verifyTypeOfLogin(JSON.parse(getRawData))
            if(newUserData !== false || null){
                setUserData(newUserData)
            }
        }
        else{
            console.error("error")
        }
    }

    const getChatMessages = (sala) =>{
        fetch(`${API}/chat/${sala}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setMessages(response)
        })
        .catch(error => console.log(error))
    }
    
    const getChats = () =>{
        fetch(`${API}/salas`)
        .then(response => response.json())
        .then(response => {
            setRawUserChats(response)
        })
        .catch(error => console.log(error))
    }

    const createChat = async () =>{
        const res = await fetch(`${API}/salas`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body:JSON.stringify({
                fechainicio: "",
                fechafin: "",
                horainicio: "",
                horafin: ""
            })
        })
        const data = await res.json();
        return data
    }

    const switchChat = (chatPos) =>{
        setHallId(createChat())
        const isTheSelectedChat = userChats.findIndex(posicion =>{
            return posicion.idusuario === chatPos
        })
        getChatMessages(1);
        setSelectedChat(userChats[isTheSelectedChat])
    }

    const userChats = userRawChats.filter((item) =>{
        return item.idusuario !== userData.idusuario
    })

    const sendMessage = async (e) =>{
        const res = await fetch(`${API}/chat`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                mensajes:  [{
                    mensaje: userMessage,
                    idsala: hallId,
                    idusuario: userData.idusuario
                }],
                salaUsuarios: [
                    {
                        idsala: hallId,
                        idusuario: userData.idusuario
                    }
                ]
            })
        })
        const data = await res.json();
    }

    useEffect(() => {
        getUserInSessionData()
        getChats()
    }, [])

    setInterval(()=>{
        getChatMessages(hallId)
      },1000)

    return (
        <>
        <Header />
        <section className="chat">

            <div className="nav_messages">
                <h2 className="subtitle_nav_chat">Chat</h2>
                <div className="container_nav_messages" >           
                    { userRawChats.map(chat =>(
                        <div onClick={e => switchChat(chat.idusuario)}>
                            <ChatUserCard userChatsInfo={chat} key={chat.idusuario}/>             
                        </div>
                    ))}
                </div>
            </div>

            <div className="container_chat">
                <div className="header_chat">
                    <div className="container_profile">
                        <div className="image_user">
                            <img src="https://th.bing.com/th/id/R.0b38392068f1a05fa47f57298a322d8b?rik=mPlP%2fdmKTlKJcA&riu=http%3a%2f%2fimages3.memedroid.com%2fimages%2fUPLOADED580%2f60b693cc6ea44.jpeg&ehk=rkyGW6IEJry944Hh4HJQBEFLF%2bQKbzuaq3RbOY0v6Gk%3d&risl=&pid=ImgRaw&r=0" alt="Profile" />
                        </div>
                        <p className="username">{selectedChat.nombres}</p>
                    </div>
                </div>

                <div className="container_messages">
                        {
                            messages.map(message =>(
                                <MessageCard messageObject={message} key={message.idmensaje}/>
                            ))
                        } 
                </div>

                <div className="container_input_messages">
                    <input className="input_message" type="text"  value={userMessage} placeholder="Mensaje..."autoFocus onChange={e => setUserMessage(e.target.value)} />
                    <button className="btn_send_message" onClick={e => sendMessage(e.target.value)}>Enviar</button>
                </div>
            </div>

        </section>
        </>
    )
}