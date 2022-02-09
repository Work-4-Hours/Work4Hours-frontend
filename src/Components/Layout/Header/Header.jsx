import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'; 
// import { useAuth0 } from '@auth0/auth0-react';
// import { LogoutButton } from '../Logout/Logout';
// import {VerifyUserInSession} from '../Functions/ReusableFunctions'
import './Header.css';

export const Header = () => {
    const  [isAuthenticated, setIsAuthenticated ] = useState(false)

    useEffect(() => {
        // setIsAuthenticated(VerifyUserInSession())
    })

    return (
        <header className="header">  

            <div className="center_nav_bar">    
                <nav>
                    <Link className="logo" to="/">Work 4 Hours</Link>
                </nav>

                <div>                        
                    {isAuthenticated 
                        ?                        
                        // <LogoutButton/>          
                        <button>Logout</button>                  
                        :
                        <>
                            <Link className="button_registry" to="/registry">Registrarse</Link> 
                            <Link className="button_login" to="/login">Iniciar sesión</Link>                          
                        </>
                    }
                </div>  
            </div>
        </header>
    )
}