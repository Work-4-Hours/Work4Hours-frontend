import React, { useContext } from 'react'
import { AdminContext } from 'Context/AdminContext';


export const UserRole = ({ children }) => {

    const {admin} = useContext(AdminContext)

    // if(jwt_decode(admin.token).rol == process.env.REACT_APP_USER_ROL)         
                
    // else if(jwt_decode(admin.token).rol == process.env.REACT_APP_ADMIN_ROL) 
        

    return (
        true ? children : null
    )
}
