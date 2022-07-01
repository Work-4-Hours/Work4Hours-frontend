import { useLocalStorage } from 'CustomHooks/useLocalStorage';
import { useNotification } from 'CustomHooks/useNotification';
import { sha256 } from 'js-sha256';
import jwt_decode from "jwt-decode";

import React, { createContext, useEffect, useState, useContext } from 'react'

export const AdminContext = createContext({});

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin, removeAdmin] = useLocalStorage(sha256('userAuth'),'')
    const [selectedListUsers, setSelectedListUsers, removeSelectedListUsers] = useLocalStorage(sha256('selectedListUsers'),[])
    const [selectedListServices, setSelectedListServices, removeSelectedListServices] = useLocalStorage(sha256('selectedListServices'),[])
    const { userConnection, sendNotification, closeConnection } = useNotification();

    const getToken = () => {
        return admin.token
    }
    const logoutAdmin = () => {
        removeAdmin()
        window.location.reload()
    }

    const data={ admin, logoutAdmin, getToken, sendNotification, selectedListUsers, setSelectedListUsers, removeSelectedListUsers, selectedListServices, setSelectedListServices, removeSelectedListServices}

    useEffect(() => {     
        closeConnection()
        userConnection(jwt_decode(admin.token).id);    
    }, [])

    return (
        <AdminContext.Provider value={data}>
            {children}
        </AdminContext.Provider>
    )
}