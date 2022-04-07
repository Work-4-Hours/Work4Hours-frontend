import { DivShadow } from 'Components/StyleComponets/DivShadow'
import React, { useEffect, useState } from 'react'
import { Title } from 'Components/StyleComponets/Titlte'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { Link } from 'react-router-dom'

import './Login.css'
import { useFetch } from 'CustomHooks/useFetch'

export const Login = () => {

    const { post, data, loading } = useFetch()
    const fetchUsers  = useFetch()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleChange = (e)=>{ 
        e.preventDefault()

        const url = process.env.REACT_APP_API
        post(`${url}/login`, {email: email, password: password})
        
        fetchUsers.get(`${url}`)
        
        fetch(`${url}/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: "email",
                password: "password"
            })
        })
        .then(response => response )
        .then(response=> console.log(response))

        fetch(`${url}`)
        .then(response => response )
        .then(response=> console.log(response))
    }
   
    useEffect(() => {
        if(loading == false)
             console.log(data);

        if(fetchUsers.loading == false)
            console.log(fetchUsers.data);
    }, [loading])

    return (
        <main className='login'>
            <div className="background_registry"></div>
            {/* <img className='background_image' src="https://res.cloudinary.com/sena-quindio/image/upload/v1641684199/kv1hb9gxa4folz8dftxg.jpg" alt="" /> */}
            <div className="center_main_login">
                <div className="information_login_app">
                    <h1 className='title_info_login_app'>Work 4 Hours</h1>
                    <p className='info_login'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nihil accusantium at voluptate. Dolore cumque provident veritatis blanditiis quibusdam, sequi enim</p>
                </div>
                <DivShadow className="container_form_login">
                    <div className="padding_container_form_login">
                        <Title>Iniciar sesión</Title>
                        <form className='form_login' onSubmit={handleChange}>
                            <InputTextLabel titleLabel='Correo' placeholder='Correo'  onChange={e => setEmail(e.target.value)} />
                            <InputTextLabel titleLabel='Contraseña' placeholder='Contraseña' type='password' onChange={e => setPassword(e.target.value)} />
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