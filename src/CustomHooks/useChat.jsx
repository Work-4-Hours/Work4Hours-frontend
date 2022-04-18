import React, { useState } from 'react'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

export const useChat = () => {
    const [connectionChat, setConnectionChat] = useState();
    const [messages, setMessages] = useState([]);
    const [currentRoom, setCurrentRoom] = useState("");

    const connectionRoom = async (room) => {
        const connection = new HubConnectionBuilder()
        .withUrl(`https://workforhours-api.somee.com/chat`)
        .configureLogging(LogLevel.Information)
        .build()
        
        connection.on("Recive", (message, name, date) => {
            setMessages(messages => [...messages, { message, name, date }])
        })

        connection.on("ShowConnected", (connection) => {
            console.log(connection);
        })

        connection.onclose(() => {
            setConnectionChat()
            setMessages([])
        });

        await connection.start()
        await connection.invoke("AddToGroup", String(room))
        setConnectionChat(await connection)
        setCurrentRoom(String(room))
    }

    const sendMessage = async (message, name, date) => {
        await connectionChat.invoke("SendMessage", currentRoom, message, name, date)       
    }

    const closeConnection = async () => {
        try {
          await connectionChat.stop();
        } catch (e) {
          console.log(e);
        }
    }
    
    return {
        connectionRoom,
        sendMessage,
        messages,
        closeConnection
    }
}
