import { Title } from 'Components/StyleComponets/Titlte'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import React from 'react'
import './Login.css'

export const Login = () => {
    return (
        <main className='login'>
            <div className="center_main_login">
                <div className="information_login_app">

                </div>
                <div className="container_form_login">
                    <Title>Iniciar sesión</Title>
                    <form className='form_login' action="">
                        <InputTextLabel titleLabel='Correo' placeholder='Correo' />
                    </form>
                </div>
            </div>
        </main>
    )
}