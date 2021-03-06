import React, { useEffect } from 'react'
import { DivShadow } from 'Components/StyledComponets/DivShadow'
import { Button } from 'Components/Ui/Button/Button'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { useField } from 'CustomHooks/useField'
import { ReactComponent as IconUnlock } from 'Assets/Icons/IconUnlock.svg'
import { ReactComponent as IconCheck } from 'Assets/Icons/IconCheck.svg'

import './ForgottenPassword.css'
import { useLocalStorage } from 'CustomHooks/useLocalStorage'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const regex_email = /^(([^<>()[\]\ \.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regex_password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

export const ForgottenPassword = () => {

    const [params, setParams] = useSearchParams()

    const navigate = useNavigate()

    const email = useField({ type: 'email', validate: regex_email, message_errors: 'El correo ingresado es incorrecto' })

    const password = useField({ type: 'password', validate: regex_password, message_errors: 'Contraseña incorrecta' })
    const confrimPassword = useField({ type: 'password', validate: regex_password, message_errors: 'Contraseña incorrecta' })

    const [value, setValue, removeValue] = useLocalStorage('stateForgottenPassword', 1)

    
    const sendEmail = () => {
        axios.get(`${process.env.REACT_APP_API_PRODUCTION}/recoverPassword/${email.value}`)
        .then(response => {
        })
        .catch(error => console.log(error))          
    }

    useEffect(() => {
        if (params.get('id')) {
            setValue(2)
        } else {
            setValue(1)

        }
    }, [params])

    useEffect(() => {
        if (password.value !== confrimPassword.value)
            confrimPassword.setIsValidate(false)
        confrimPassword.setMessageError('Las contraseñas no coinciden')
    }, [confrimPassword.value])

    const redirecLogin = () => {
        removeValue()
        navigate('/login')
    }

    return (
        <main>
            <div className="center_main_forgotten_password">
                <DivShadow className='form_forgotten_password'>
                    <div className="padding_forgotten_password">
                        {
                            value === 1 && (
                                <>
                                    <header className='header_forgotten_password'>
                                        <IconUnlock className='incon_unlock' />
                                        <div>
                                            <h1 className='title_header_forgotten_password'>Recuperar contraseña</h1>
                                            <p className='info_header_forgotten_password'>Se enviara un código de cuatro dígitos para actualizar su contraseña. Por favor, ingrese el correo electrónico con el que se registro en nuestra app.</p>
                                        </div>
                                    </header>

                                    <form className='form_forgotten_password' onSubmit={e => e.preventDefault()}>
                                        <InputTextLabel titleLabel='Correo' {...email} placeholder='Dirección de correo electrónico' />
                                        <Button value='Enviar correo electrónico' onClick={() => {
                                            setValue(1)
                                            sendEmail()
                                        }} />
                                    </form>
                                </>
                            )

                        }

                        {
                            value === 2 && (
                                <section className='section_new_pasword'>
                                    <header className='header_forgotten_password'>
                                        <div>
                                            <h1 className='title_header_forgotten_password'>Recuperar contraseña</h1>
                                        </div>
                                    </header>

                                    <form className='form_forgotten_password'>
                                        <InputTextLabel titleLabel='Nueva contraseña' {...password} placeholder='Direccion de correo electronico' />
                                        <InputTextLabel titleLabel='Confirmar nueva contraseña' {...confrimPassword} placeholder='Direccion de correo electronico' />
                                        <Button value='Actualizar contraseña' onClick={() => setValue(value + 1)} />
                                    </form>
                                </section>
                            )
                        }

                        {
                            value === 3 && (
                                <section className='section_new_pasword'>
                                    <header className='header_forgotten_password'>
                                        <IconCheck className='incon_unlock' />
                                        <div>
                                            <h1 className='title_header_forgotten_password'>Contraseña actualizada</h1>
                                            <p onClick={() => redirecLogin()} className='btn_login'>Ir al login</p>
                                        </div>
                                    </header>
                                </section>
                            )
                        }
                    </div>
                </DivShadow>
            </div>
        </main>
    )
}
