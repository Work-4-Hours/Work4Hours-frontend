import React, { useState, useEffect, useRef, useContext } from 'react';
import { DivNavBar } from 'Components/StyleComponets/DivNavBar';
import { Title } from 'Components/StyleComponets/Titlte';
import { InfoNotification } from 'Components/Ui/InfoNotification/InfoNotification';
import { LinkOption } from 'Components/Ui/LinkOption/LinkOption';
import { PhotoUserProfile } from 'Components/Ui/PhotoUserProfile/PhotoUserProfile';
import { Link, useNavigate } from 'react-router-dom';
import { DivPopUp } from "Components/StyleComponets/DivPopUp"
import { InputTextLabel } from "Components/Ui/InputTextLabel/InputTextLabel"
import { Button } from "Components/Ui/Button/Button"
import { UserContext } from 'Context/UserContext';
import { DivShadow } from 'Components/StyleComponets/DivShadow';
import IconAddImage from 'Assets/Icons/IconAddImageWhite.png'

import './Header.css';

export const Header = () => {
    const { user, isAuth, logout, notifications, isAlert } = useContext(UserContext)
    const [isOcult, setIsOcult] = useState(true)
    const [isOcultProfile, setIsOcultProfile] = useState(false)
    const navigate = useNavigate()
    const nav_bar = useRef()

    const logoutApp = () => {
        logout()
        navigate('/')
    }
    
    const ocult = () => {
        setIsOcult(!isOcult)
    }

    return (
        <>

            {
                isAuth() && (
                    <DivPopUp isOpen={isOcultProfile} >
                        <div className="ocult_popup" onClick={() => setIsOcultProfile(false)}></div>
                        <div className="center_popup_profile">
                            <DivShadow className='popup_profile'>
                                <div className="padding_info_user">
                                    <Title className='title_form_my_profile'>Perfil</Title>
                                    <form className='form_my_profile'>
                                        <div className="padding_form_my_profile">
                                            <InputTextLabel titleLabel='Nombres' type='text' value={user?.info[0]?.name} />
                                            <InputTextLabel titleLabel='Apellidos' type='text' value={user?.info[0]?.lastName} />
                                            <InputTextLabel titleLabel='Celular' type='number' value={user?.info[0]?.phone} />
                                            <InputTextLabel titleLabel='Correo' type='email' value={user.info[0]?.email} />
                                            <InputTextLabel titleLabel='Fecha de nacimiento' type='text' />
                                        </div>
                                        <div className="input_save_profile">
                                            <Button style='button_big' value='Guardar' />
                                        </div>
                                    </form>
                                </div>
                                <div className="image_profile">
                                    <input type="file" name="" id="input_file_image" />
                                    <label htmlFor="input_file_image">
                                        <div className="change_image_my_profile">
                                            <img className='icon_add_image' src={IconAddImage} alt="" />
                                            <p className='info_change_image'>Cambiar imagen de perfil</p>
                                        </div>
                                    </label>
                                    <PhotoUserProfile infoProfile={user?.info[0]} style='big_profile' small={false} />
                                </div>
                            </DivShadow>
                        </div>
                    </DivPopUp>
                )
            }
            <header className="header">
                <div className="center_nav_bar">
                    <div>
                        <Link to="/"><img className="logo" src="https://res.cloudinary.com/sena-quindio/image/upload/v1646884944/qqdviu6wbgeum4hpp5m6.png" alt="" /></Link>
                    </div>
                    <nav>
                        <div className="nav_login">
                            {
                                isAuth() ?
                                    <>
                                        <p className='username_header'>{user.info[0].name} {user.info[0].lastName}</p>
                                        <PhotoUserProfile infoProfile={user.info[0]} style='small_profile' small={true} onClick={ocult} />
                                        {isAlert && <div className="simbol_alert"></div>}

                                        <DivNavBar isOcult={isOcult} className='nav_bar_header' ref={nav_bar}>

                                            <div className='scroll_nav_bar'>
                                                <div className="info_nav_bar_user">
                                                    <PhotoUserProfile infoProfile={user.info[0]} style='small_profile' small={true} />
                                                    <div className="info_user_profile_nav_bar">
                                                        <p className='username_nav_bar'>{user.info[0].name} {user.info[0].lastName}</p>
                                                        <p className='email_nav_bar'>{user.info[0].email}</p>
                                                    </div>
                                                </div>

                                                <div>

                                                    <div className="options_nav">
                                                        <LinkOption link='' text='Perfil' onClick={() => {
                                                            ocult();
                                                            setIsOcultProfile(true)
                                                        }
                                                        } />
                                                        <LinkOption link='/dashboard/publications' text='Administrar servicios' />
                                                        <LinkOption link='/chat' text='Chat' />
                                                    </div>

                                                    <div className="notifications_nav">
                                                        <LinkOption link='' isLink={false} text='Notificaciones' />
                                                        {isAlert && <div className="simbol_alert option_notification"></div>}
                                                        {isAlert && (
                                                            <div className="notifications">
                                                                {
                                                                    notifications?.map(item => (
                                                                        <Link className='link_notification' to='/chat'>

                                                                            <InfoNotification infoProfile={{
                                                                                name: item.username, color: item.color,
                                                                                message: item.message,
                                                                                userPicture: item.imageProfile
                                                                            }} />
                                                                        </Link>
                                                                    ))
                                                                }

                                                            </div>
                                                        )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="option_logout">
                                                <LinkOption isLink={false} text='Cerrar sesión' onClick={logoutApp} />
                                            </div>

                                        </DivNavBar>
                                        {
                                            !isOcult && <div className='ocult_nav_bar' onClick={() => setIsOcult(true)}></div>
                                        }
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='link_header_login'>Iniciar sesion</Link>
                                        <p className='or_nav_login'>o</p>
                                        <Link to='/registry' className='link_header_login'><Button value='Registro' /></Link>
                                    </>
                            }

                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}