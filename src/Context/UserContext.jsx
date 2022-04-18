import { useLogin } from 'CustomHooks/useLogin';
import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('loggerAuthUser')))
    const [isLoading, setIsLoading] = useState(null)

    const login = async (credencials) => {
        setIsLoading(true)
        fetch(`https://work4hours.herokuapp.com/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(
                {
                    email: credencials.email,
                    password: credencials.password
                }
            )
        })
        .then(response => response.json())
        .then(user => {
            if (user.userInfo.token) {
                console.log("Logueado");
                setUser(user.userInfo)
                window.localStorage.setItem(
                    'loggerAuthUser', JSON.stringify(user.userInfo)
                )
            }
        }).finally(() => setIsLoading(false))
    }

    const isAuth = () => {
        const logged = window.localStorage.getItem('loggerAuthUser')
        if (logged) {
            return true
        } else {
            return false
        }
    }

    const getJwt = () => {
        return user.token 
    }

    const logout = () => {
        window.localStorage.removeItem('loggerAuthUser')
        window.location.reload()
    }

    const data = { user, login, logout, isLoading, isAuth, getJwt }
    
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

