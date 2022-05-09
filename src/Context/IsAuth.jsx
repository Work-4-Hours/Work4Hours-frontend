import React, { Children, useContext } from 'react'
import { Navigate } from 'react-router'
import { UserContext } from './UserContext'

export const IsAuth = ({ children }) => {
    const { isAuth } = useContext(UserContext)
    return (
        isAuth() ? children : <Navigate to='/login' />
    )
}
