import React, { useState } from 'react'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import Notification from 'Assets/Sounds/Notification.mp3'

export const useNotification = () => {

    const [notifications, setNotifications] = useState([]);
    const [isAlert, setIsAlert] = useState(false);
    const [connectionNotf, setConnectionNotf] = useState();
    
    const notification = new Audio(Notification);
    
    const userConnection = async (user) => {
        const connection = new HubConnectionBuilder()
            .withUrl(`${process.env.REACT_APP_API_CS_NOTF}/notifications`)
            .configureLogging(LogLevel.Information)
            .build()

        connection.on("ReciveMessage", (userId, message, username, color, imageProfile) => {
            notification.play();
            setIsAlert(true)
            setNotifications(notifications => [...notifications, { userId, message, username, color, imageProfile }])
        })

        connection.on("ShowConnected", (connection) => {
            console.log(connection);
        })

        connection.onclose(() => {
            setConnectionNotf()
        });

        await connection.start()
        await connection.invoke("ConnectionNotf", String(user))
        setConnectionNotf(await connection)
    }

    const sendNotification = async (userId, message, username, color, imageProfile) => {
        await connectionNotf.invoke("SendNotification", String(userId), message, username, color, imageProfile)
    }

    const closeConnection = async () => {
        try {
            await connectionNotf.stop();
        } catch (e) {
            console.log(e);
        }
    }

    return {
        userConnection,
        sendNotification,
        closeConnection,
        notifications,
        isAlert
    }
}
