import React, { useContext, useEffect, useState } from 'react'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { Title } from 'Components/StyleComponets/Titlte'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from 'Context/UserContext'
import jwt_decode from "jwt-decode";
import { ReactComponent as IconDanger } from 'Assets/Icons/IconDanger.svg'

import './Login.css'
import { TextError } from 'Components/StyleComponets/MessageError'

export const Login = () => {
    const navigate = useNavigate()
    const { login, error, isAuth, isLoading, user } = useContext(UserContext)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleLogin = (e) => {
        e.preventDefault()

        login({ email: email, password: password })
    }

    useEffect(() => {
        if (!isLoading && isAuth()) {
            if (jwt_decode(user.token).rol == process.env.REACT_APP_USER_ROL) {
                navigate('/')
                window.location.reload()
            }

            else if (jwt_decode(user.token).rol == process.env.REACT_APP_ADMIN_ROL) {
                navigate('/AdminUsers')
                window.location.reload()
            }

        }
    }, [isLoading])



    return (
        <main className='login'>
            <div className="background_registry"></div>
            <img className='background_image' src="https://res.cloudinary.com/sena-quindio/image/upload/v1652153285/nt4veg6nluasxa29vxnp.png" alt="" />
            <div className="center_main_login">
                <div className="information_login_app">
                    <h1 className='title_info_login_app'>Work 4 Hours</h1>
                    <p className='info_login'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nihil accusantium at voluptate. Dolore cumque provident veritatis blanditiis quibusdam, sequi enim</p>
                </div>
                <DivShadow className="container_form_login">
                    <div className="padding_container_form_login">
                        <Title>Iniciar sesión</Title>
                        <form className='form_login' onSubmit={handleLogin}>
                            <InputTextLabel titleLabel='Correo' placeholder='Correo' isValidate={!error} onChange={e => setEmail(e.target.value)} />
                            <div>
                                <InputTextLabel titleLabel='Contraseña' placeholder='Contraseña' isValidate={!error} type='password' onChange={e => setPassword(e.target.value)} />
                                <TextError isError={!error}>{<IconDanger className='icon_danger' />} Credenciales incorrectas</TextError>
                            </div>
                            <Link className='link_recover_password' to='/'>Recuperar contraseña</Link>
                            <Button value='Ingresar'  isLoading={isLoading} />
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