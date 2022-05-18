import React, { createContext, useEffect, useState,useContext } from 'react'
import { UserContext } from 'Context/UserContext';
export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const { user, logout, getJwt  } = useContext(UserContext)
    const data={user, logout, getJwt}
    return (
        <AdminContext.Provider value={data}>
            {children}
        </AdminContext.Provider>
    )
}