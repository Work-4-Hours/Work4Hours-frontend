import { DivShadow } from 'Components/StyleComponets/DivShadow'
import React from 'react'
import { Title } from 'Components/StyleComponets/Titlte'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { Link } from 'react-router-dom'

import './Login.css'

export const Login = () => {
    return (
        <main className='login'>
            <div className="background_registry"></div>
            <img className='background_image' src="https://res.cloudinary.com/sena-quindio/image/upload/v1641684199/kv1hb9gxa4folz8dftxg.jpg" alt="" />
            <div className="center_main_login">
                <div className="information_login_app">
                    <h1 className='title_info_login_app'>Work 4 Hours</h1>
                    <p className='info_login'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nihil accusantium at voluptate. Dolore cumque provident veritatis blanditiis quibusdam, sequi enim</p>
                </div>
                <DivShadow className="container_form_login">
                    <div className="padding_container_form_login">
                        <Title>Iniciar sesión</Title>
                        <form className='form_login' action="">
                            <InputTextLabel titleLabel='Correo' placeholder='Correo' />
                            <InputTextLabel titleLabel='Contraseña' placeholder='Contraseña' />
                            <Link className='link_recover_password' to='/'>Recuperar contraseña</Link>
                            <Button value='Ingresar' />
                        </form>
                        <div className="info_register">
                            <p>¿No tienes cuenta?</p>
                            <Link className='link_registry' to='/registry'>Registrate</Link>
                        </div>
                    </div>
                </DivShadow>
            </div>
        </main>
    )
}