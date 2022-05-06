import React, { useEffect, useState } from 'react'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { Link } from 'react-router-dom'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { Title } from 'Components/StyleComponets/Titlte'
import { InputSelect } from 'Components/Ui/InputSelect/InputSelect'
import { SelectTextLabel } from 'Components/Ui/SelectTextLabel/SelectTextLabel'

import './Registry.css'
export const Registry = () => {

    const [cities, setCities] = useState([])
    const [departments, setDepartments] = useState([])
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [phone, setPhone] = useState(null)
    const [address, setAddress] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [birthdate, setBirthdate] = useState(null)
    const [city, setCity] = useState(null)

    const registry = async (e) => {
        e.preventDefault()
        setLoading(true)
        fetch(`${process.env.REACT_APP_API}/registry`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                name : name,
                lastName: surname,
                phoneNumber: phone,
                address: 'null',
                email: email,
                password: password,
                birthDate: birthdate,
                picture: 'null',
                city: parseInt(city),
                color: '#831a1a'                       
            })

        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .finally(() => setLoading(false))
    }

    const getCities = (iddepartament) => {
        fetch(`${process.env.REACT_APP_API}/cities/${iddepartament}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response.json())
        .then(response => {
            setCities(response.cities)
            console.log(response);
        })
        .catch(error => console.log(error))
    }
 
    useEffect(()=> {
        const fetchTest = async () => {
                fetch(`${process.env.REACT_APP_API}/departments`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                .then(response => response.json())
                .then(response => {
                    setDepartments(response.departments.map(item => {
                        return {id: item.id, name: item.name}
                    }))
                   
                })
                .catch(error => console.log(error))
        }

        fetchTest()

    },[])

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
                        <form className='form_registry' onSubmit={e => registry(e)}>
                            <div className="subtitle_form_registry">
                                <p>Datos basicos</p>
                            </div>
                            <section className="basic_data">                     
                                <InputTextLabel titleLabel='Nombres' placeholder='Camilo' onChange={e => setName(e.target.value)} />
                                <InputTextLabel titleLabel='Apellidos' placeholder='Lopez' onChange={e => setSurname(e.target.value)}  />
                                <InputTextLabel titleLabel='Celular' placeholder='Celular' type='number'  onChange={e => setPhone(e.target.value)}  />
                                <InputTextLabel titleLabel='Fecha de nacimiento' type='text' onChange={e => setBirthdate(e.target.value)} />                         
                                <SelectTextLabel
                                 titleLabel='Seleccione su departamento'
                                 nameSelect='Departamento'
                                 options={departments}
                                 onChange={e => getCities(e.target.value)}/>

                                 <SelectTextLabel
                                 titleLabel='Seleccione su ciudad'
                                 nameSelect='Ciudad'
                                 options={cities}
                                 onChange={e => setCity(e.target.value)}/>
                            
                            </section>

                            <div className="subtitle_form_registry">
                                <p>Cuenta</p>
                            </div>
                            <section className="acount_data">
                                <InputTextLabel titleLabel='Email' placeholder='correo' type='email' onChange={e => setEmail(e.target.value)} />
                                <InputTextLabel titleLabel='Contraseña' placeholder='contraseña' type='password' onChange={e => setPassword(e.target.value)} />
                            </section>
                            <Button value='Registrar cuenta' isLoading={loading}  />
                        </form>    
                    </div>
                </DivShadow>

                <div className="information_app">
                    <h1 className='title_info_app'>Work 4 Hours</h1>
                    <p className='text_info_registry'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, omnis optio. Impedit amet molestias repellat possimus sint blanditiis ipsam sapiente.</p>
                </div>
            </div> 

        </main>
    )
}