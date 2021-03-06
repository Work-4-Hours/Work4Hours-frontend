import React, { useContext, useEffect} from 'react'
import { DivShadow } from 'Components/StyledComponets/DivShadow'
import { Title } from 'Components/StyledComponets/Titlte'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from 'Context/UserContext'
import jwt_decode from "jwt-decode";
import { ReactComponent as IconAlert } from 'Assets/Icons/IconAlert.svg'
import { TextError } from 'Components/StyledComponets/MessageError'
import { useField } from 'CustomHooks/useField'

import './Login.css'

export const Login = () => {

    const navigate = useNavigate()
    const { login, error, isAuth, isLoading, user } = useContext(UserContext)

    const email = useField({ type: 'email', message_errors: '' })
    const password = useField({ type: 'password',  message_errors: '' })

    const handleLogin = (e) => {
        e.preventDefault()
        email.validator(email.value) && password.validator(password.value) && login({ email: email.value, password: password.value })
    }

    useEffect(() => {
        if (!isLoading && isAuth()) {
            if (jwt_decode(user.token).rol === process.env.REACT_APP_USER_ROL) {
                navigate('/')
                window.location.reload()
            }

            else if (jwt_decode(user.token).rol === process.env.REACT_APP_ADMIN_ROL) {
                navigate('/AdminUsers')
                window.location.reload()
            }
        }
    }, [isLoading])

    return (
        <main className='login_main'>
            <div className="center_main_login">
                <div className="information_login_app">
                    <h1 className='title_info_login_app'>Work 4 Hours</h1>
                    <p className='info_login'>Accede ya mismo a Work 4 Hours, y aprovecha la oportunidad de encontrar y ofertar los servicios que desees.</p>
                </div>
                <DivShadow className="container_form_login">
                    <div className="padding_container_form_login">
                        <Title>Iniciar sesi??n</Title>
                        <form className='form_login' onSubmit={handleLogin}>

                            <InputTextLabel titleLabel='Correo' {...email} placeholder='Correo' />

                            <div>
                                <InputTextLabel titleLabel='Contrase??a' {...password} placeholder='Contrase??a' />
                            </div>
                                <TextError isError={!error}>{<IconAlert className='icon_alert' />} Credenciales incorrectas</TextError>
                            <Link className='link_recover_password' to='/password/forgotten'>Recuperar contrase??a</Link>
                            <Button value='Ingresar' isLoading={isLoading} />
                        </form>

                        <div className="info_register">
                            <p>??No tienes cuenta?</p>
                            <Link className='link_registry' to='/registry'>Reg??strate</Link>
                        </div>
                    </div>
                </DivShadow>
            </div>

        </main>
    )
}