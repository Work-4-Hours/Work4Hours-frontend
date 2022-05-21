import React, { createContext, useEffect, useState,useContext } from 'react'
import { UserContext } from 'Context/UserContext';
export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin]=useState(JSON.parse(window.localStorage.getItem('loggerAuthUser')))

    const getToken = () => {
        return user.token
    }
    const logoutAdmin = () => {
        window.localStorage.removeItem('loggerAuthUser')
        window.location.reload()
    }

    const data={admin, logoutAdmin, getToken}
    return (
        <AdminContext.Provider value={data}>
            {children}
        </AdminContext.Provider>
    )
}