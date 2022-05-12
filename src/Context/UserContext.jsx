import React, { createContext, useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import { sha256 } from 'js-sha256';
import { useLocalStorage } from 'CustomHooks/useLocalStorage';
import { useLogin } from 'CustomHooks/useLogin';
import { useNotification } from 'CustomHooks/useNotification';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser, removeUser] = useLocalStorage(sha256('userAuth'),'')

    const { 
        userConnection, 
        sendNotification, 
        closeConnection, 
        notifications, 
        isAlert 
    } = useNotification()

    const { 
        login, 
        logout, 
        isLoading, 
        isAuth
    } = useLogin( user, setUser, removeUser, userConnection)

    const getJwt = () => {
        return user.token
    }

    useEffect(() => {
        if (isAuth()) {
            closeConnection()
            userConnection(jwt_decode(user.token).id);
        }
    }, [])

    const data = { user, login, logout, isLoading, isAuth, getJwt, sendNotification, isAlert, notifications }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}