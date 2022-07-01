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
        error,
        isLoading, 
        isAuth
    } = useLogin( user, setUser, removeUser, userConnection)

    const getJwt = () => {
        return user.token
    }

    const updateUser = (data) => {
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/updateUser`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JSW ${getJwt()}`
            },
            body: JSON.stringify({
               ...data
            })
        })
        .then(response => response.json())
        .then(response => {
                // setData(response);
                console.log(response);
            })
            .catch(error =>{})
            .finally(() =>{})
    }

    useEffect(() => {
        if (isAuth()) {
            closeConnection()
            userConnection(jwt_decode(user.token).userId);
        }
    }, [])

    const data = { user, login, error, logout, isLoading, isAuth, getJwt, sendNotification, isAlert, notifications, updateUser }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}