import React, { useState } from 'react'
import jwt_decode from "jwt-decode";

export const useLogin = ( user, setUser, removeUser, userConnection ) => {

    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(false);

    const login = async (credencials) => {
        setIsLoading(true)
        fetch(`${process.env.REACT_APP_API}/login`, {
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
        .then(response => {
            if (response.userInfo.token) {
                setUser(response.userInfo)
                userConnection(jwt_decode(response.userInfo.token).id)
            } else if(!response.userInfo.exist) {
                setError(true)
            }
        })
        .catch(response => setError(true))
        .finally(() => setIsLoading(false))
    }

    const isAuth = () => {
        const logged = user?.exist
        if (logged) {
            return true
        } else {
            return false
        }
    }
    
    const logout = () => {
        removeUser()
        window.location.reload()
    }

    return {
        login,
        logout,
        error,
        isLoading,
        isAuth
    }
}
