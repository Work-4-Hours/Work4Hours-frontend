import { DivNavBar } from 'Components/StyleComponets/DivNavBar';
import { Title } from 'Components/StyleComponets/Titlte';
import { Button } from 'Components/Ui/Button/Button';
import { InfoNotification } from 'Components/Ui/InfoNotification/InfoNotification';
import { LinkOption } from 'Components/Ui/LinkOption/LinkOption';
import { PhotoUserProfile } from 'Components/Ui/PhotoUserProfile/PhotoUserProfile';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {

    const [isOcult, setIsOcult] = useState(true) 
    const nav_bar = useRef()

    const ocult = () => {
        setIsOcult(!isOcult)
    }

    const profile = {
        color: "#a11d1d",
        imageprofile: "",
        name: "Camilo Lopez",
        email: "carlos@gmail.com",
        phone: "3166529009",
        calification: 73.6
    }

    const profile2 = {
        color: "#811ed1",
        imageprofile: "",
        name: "Luis Alverto",
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
                                <PhotoUserProfile infoProfile={profile} style='small_profile' small={true} onClick={ocult}/>
                                
                                <DivNavBar isOcult={isOcult} className='nav_bar_header' ref={nav_bar}>
                                    
                                    <div className="info_nav_bar_user">
                                        <PhotoUserProfile infoProfile={profile}  style='small_profile' small={true} />                             
                                        <div className="info_user_profile_nav_bar">
                                            <p className='username_nav_bar'>{profile.name}</p>
                                            <p className='email_nav_bar'>{profile.email}</p>
                                        </div>
                                    </div>

                                    <div className="options_nav">
                                        <LinkOption link='/profile' text='Perfil'/>
                                        <LinkOption link='/profile' text='Administrar servicios'/>
                                        <LinkOption link='/chat' text='Chat'/>
                                    </div>

                                    <div className="notifications_nav">
                                        <LinkOption link='/profile' text='Notificaciones'/>

                                        <div className="notifications">
                                            <Link className='link_notification' to='/'>
                                                <InfoNotification infoProfile={profile2} />
                                            </Link>
                                            <Link className='link_notification' to='/'>
                                                <InfoNotification infoProfile={profile2} />
                                            </Link>
                                            <Link className='link_notification' to='/'>
                                                <InfoNotification infoProfile={profile2} />
                                            </Link>
                                            <Link className='link_notification' to='/'>
                                                <InfoNotification infoProfile={profile2} />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="option_logout">
                                        <LinkOption isLink={false} text='Cerrar sesión' />
                                    </div>
                      
                                </DivNavBar>
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