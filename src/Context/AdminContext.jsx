import { useLocalStorage } from 'CustomHooks/useLocalStorage';
import { sha256 } from 'js-sha256';
import React, { createContext, useEffect, useState,useContext } from 'react'

export const AdminContext = createContext({});

export const AdminProvider = ({ children }) => {
    // const [admin, setAdmin]=useState(JSON.parse(window.localStorage.getItem('loggerAuthUser')))
    const [admin, setAdmin, removeAdmin] = useLocalStorage(sha256('userAuth'),'')

    const getToken = () => {
        return admin.token
    }
    const logoutAdmin = () => {
        // window.localStorage.removeItem('loggerAuthUser')
        // window.location.reload()
        removeAdmin()
    }



    const data={ admin, logoutAdmin, getToken }

    return (
        <AdminContext.Provider value={data}>
            {children}
        </AdminContext.Provider>
    )
}