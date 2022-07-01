import { AdminContext } from 'Context/AdminContext'
import { UserRole } from 'Context/UserRole'
import React, { useContext } from 'react'
import { AllRoutes } from 'Routes/Routes'
import { RoutesAdmin } from 'Routes/RoutesAdmin'
import jwt_decode from "jwt-decode";
import { PublicRoutes } from 'Routes/PublicRoutes'
import { useLocalStorage } from 'CustomHooks/useLocalStorage'
import { sha256 } from 'js-sha256'

export const ConfigRoutes = () => {
    const [user] = useLocalStorage(sha256('userAuth'),null)
    return (
        <>
            {
                !user ?      
                <PublicRoutes/>
                :
                <>
                    {
                        jwt_decode(user?.token).rol == 2 ?
                        <AllRoutes/>
                        :
                        <RoutesAdmin/>
                    }
                </>             
            }
        </>

    )
}
