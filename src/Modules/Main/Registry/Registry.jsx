import React from 'react'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { Link } from 'react-router-dom'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { Title } from 'Components/StyleComponets/Titlte'

import './Registry.css'
export const Registry = () => {
    return (
        <main className='registry'>
            <div className="background_registry"></div>
            <img className='background_image' src="https://res.cloudinary.com/sena-quindio/image/upload/v1647117029/k8fv4rdcwvk6bwtcqzid.png" alt="" />

           <div className="center_main_registry">
                <DivShadow className='container_form_registry'>
                    <div className="padding_form_register"> 
                        <header className='header_registry'>
                            <Title>Registro</Title>
                            <Link className='link_login_form_register' to='/login'>¿Ya tienes una cuenta?</Link> 
                        </header>
                        <form className='form_registry' onSubmit={null}>
                            <div className="subtitle_form_registry">
                                <p>Datos basicos</p>
                            </div>
                            <section className="basic_data">                     
                                <InputTextLabel titleLabel='Nombres' placeholder='Camilo' />
                                <InputTextLabel titleLabel='Apellidos' placeholder='Lopez' />
                                <InputTextLabel titleLabel='Celular' placeholder='Celular' type='number' />
                                <InputTextLabel titleLabel='Fecha de nacimiento' type='text' />                         
                            </section>

                            <div className="subtitle_form_registry">
                                <p>Cuenta</p>
                            </div>
                            <section className="acount_data">
                                <InputTextLabel titleLabel='Email' placeholder='correo' type='email' />
                                <InputTextLabel titleLabel='Contraseña' placeholder='contraseña' type='password' />
                            </section>
                            <Button value='Registrar cuenta' />
                        </form>    
                    </div>
                </DivShadow>

                <div className="information_app">
                    <h1 className='title_info_app'>Work 4 Hours</h1>
                </div>
            </div> 

        </main>
    )
}