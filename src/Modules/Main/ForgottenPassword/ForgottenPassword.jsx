import React from 'react'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { Title } from 'Components/StyleComponets/Titlte'
import { Button } from 'Components/Ui/Button/Button'
import { InputText } from 'Components/Ui/InputText/InputText'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { useField } from 'CustomHooks/useField'
import { ReactComponent as IconUnlock } from 'Assets/Icons/IconUnlock.svg'

import './ForgottenPassword.css'  

const regex_email = /^(([^<>()[\]\ \.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ForgottenPassword = () => {
    const email = useField({type:'email', validate: regex_email, message_errors: 'El correo ingresado es incorrecto'})

    return (
        <main>
            <div className="center_main_forgotten_password">
                <DivShadow className='form_forgotten_password'>
                    <div className="padding_forgotten_password">
                        <header className='header_forgotten_password'>
                            <IconUnlock className='incon_unlock' />
                            <div>
                                <h1 className='title_header_forgotten_password'>Recuperar contraseña</h1>
                                <p className='info_header_forgotten_password'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, sed odio adipisci illo nisi tempore.</p>
                            </div>
                        </header>

                        <form className='form_forgotten_password'>                        
                            <InputTextLabel titleLabel='Correo' {...email}  placeholder='Direccion de correo electronico' />
                            <Button value='Enviar correo electronico'/>
                        </form>
                    </div>
                </DivShadow>
            </div>
        </main>
    )
}
