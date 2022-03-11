import React from 'react'
import { FormRegistry } from 'Components/Layout/FormRegistry/FormRegistry' 
import './Registry.css'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { Link } from 'react-router-dom'
import { InputText } from 'Components/Ui/InputText/InputText'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { Title } from 'Components/StyleComponets/Titlte'

export const Registry = () => {
    return (
        <main className='registry'>
            <div className="background_registry">
                <img className='background_image' src="https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png" alt="" />
            </div>

           <div className="center_main_registry">
                <DivShadow>
                    <header className='header_registry'>
                        <Title>Registro</Title>
                        <Link to='/login'>¿Ya tienes una cuenta?</Link> 
                    </header>
                    <form action="">
                        <div className="subtitle_form_registry">
                            <p>Datos basicos</p>
                        </div>
                        <section className="basic_data">                     
                            <InputTextLabel titleLabel='Nombres' placeholder='Camilo' />
                            <InputTextLabel titleLabel='Apellidos' placeholder='Lopez' />
                            <InputTextLabel titleLabel='Celular' placeholder='Celular' type='number' />
                            <InputTextLabel titleLabel='Fecha de nacimiento' type='date' />                         
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
                </DivShadow>

                <div className="information_app">
                    <h1>Work 4 Hours</h1>
                </div>
            </div> 

        </main>
    )
}