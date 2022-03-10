import { Button } from 'Components/Ui/Button/Button';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {

    return (
        <header className="header">
            <div className="center_nav_bar">
                <div>
                    <Link to="/"><img className="logo" src="https://res.cloudinary.com/sena-quindio/image/upload/v1646884944/qqdviu6wbgeum4hpp5m6.png" alt="" /></Link>
                </div>
                <nav>
                    <div className="nav_login">
                        <Link to='/login' className='link_header_login'>Iniciar sesion</Link>
                        <p className='or_nav_login'>o</p>
                        <Link to='/registry'><Button value='Registro' /></Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}