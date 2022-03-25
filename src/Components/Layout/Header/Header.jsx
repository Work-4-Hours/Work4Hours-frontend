import { Button } from 'Components/Ui/Button/Button';
import { PhotoUserProfile } from 'Components/Ui/PhotoUserProfile/PhotoUserProfile';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    const profile = {
        color: "#a11d1d",
        imageprofile: "https://avatars.githubusercontent.com/u/85415169?v=4",
        name: "Camilo Lopez",
        email: "carlos@gmail.com",
        phone: "3166529009",
        calification: 73.6
    }
    return (
        <header className="header">
            <div className="center_nav_bar">
                <div>
                    <Link to="/"><img className="logo" src="https://res.cloudinary.com/sena-quindio/image/upload/v1646884944/qqdviu6wbgeum4hpp5m6.png" alt="" /></Link>
                </div>
                <nav>
                    <div className="nav_login">
                        {
                            true ? 
                            <>
                                <p className='username_header'>{profile.name}</p>               
                                <PhotoUserProfile infoProfile={profile} style='small_profile' small={true}/>
                            </>
                            :
                            <>
                                <Link to='/login' className='link_header_login'>Iniciar sesion</Link>
                                <p className='or_nav_login'>o</p>
                                <Link to='/registry'><Button value='Registro' /></Link>                            
                            </>
                        }

                    </div>
                </nav>
            </div>
        </header>
    )
}