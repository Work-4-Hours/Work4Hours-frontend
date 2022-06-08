import React, { useEffect, useState } from 'react'
import { DivShadow } from 'Components/StyledComponets/DivShadow'
import { Link } from 'react-router-dom'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { Title } from 'Components/StyledComponets/Titlte'
import { InputSelect } from 'Components/Ui/InputSelect/InputSelect'
import { SelectTextLabel } from 'Components/Ui/SelectTextLabel/SelectTextLabel'
import { useField } from 'CustomHooks/useField'
import { ReactComponent as IconPlus } from 'Assets/Icons/IconPlus.svg'
import { useFetch } from 'CustomHooks/useFetch'
import { useUploadImage } from 'CustomHooks/useUploadImage'
import { useImagePreview } from 'CustomHooks/useImagePreview'
import { regex_email, regex_names, regex_password, regex_phone } from 'Validations/RejexForms'

import './Registry.css'

export const Registry = () => {

    const [cities, setCities] = useState([])
    const [departments, setDepartments] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentStep, setCurrentStep] = useState(1);
    const [disable, setDisable] = useState(true);
    const [imageFile, setImageFile] = useState(null)

    const [profileColors] = useState(['#8a1c1c', '#217511', '#239cb1', '#091b80', '#6b0d6e', '#aa5c2f'])


    // Form fields registry
    const email = useField({ type: 'email', validate: regex_email, message_errors: 'Correo incorrecto' })
    const password = useField({ type: 'password', validate: regex_password, message_errors: 'Contraseña incorrecta, debe contener almenos un numero' })
    const name = useField({ type: 'text', validate: regex_names, message_errors: 'Nombres incorrectos' })
    const surname = useField({ type: 'text', validate: regex_names, message_errors: 'Apellidos incorrectos' })
    const phone = useField({ type: 'text', validate: regex_phone, message_errors: 'Numero telefonico incorrecto' })
    const birthday = useField({ type: 'date', })
    const [city, setCity] = useState(null)

    const { data: imageProfile, loading: loadingImage, uploadImage } = useUploadImage()

    const { previewImage, setPreviewImage } = useImagePreview()

    const [steps, setSteps] = useState([
        { step: 1, current: true, complete: false, info: 'Cuenta' },
        { step: 2, current: false, complete: false, info: 'Datos basicos' },
        { step: 3, current: false, complete: false, info: 'Perfil (Opcional)' }
    ])

    const changeStep = (value) => {
        setCurrentStep(currentStep + 1)
        steps[value - 1].current = true
        steps[value - 2].complete = true
    }

    const registry = async () => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/registry`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                name: name.value,
                lastName: surname.value,
                phoneNumber: phone.value,
                address: '',
                email: email.value,
                password: password.value,
                birthDate: birthday.value,
                picture: imageProfile,
                city: parseInt(city),
                color: profileColors[Math.floor(Math.random() * profileColors.length)]
            })
        })
            .then(response => response.json())
            .then(user => {
                console.log(user);
            })
            .finally(() => setLoading(false))
    }

    const getCities = (iddepartament) => {
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/cities/${iddepartament}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(response => {
                setCities(response.cities)
                setDisable(false)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        const fetchTest = async () => {
            fetch(`${process.env.REACT_APP_API_PRODUCTION}/departments`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(response => response.json())
                .then(response => {
                    setDepartments(response.departments.map(item => {
                        return { id: item.id, name: item.name }
                    }))
                })
                .catch(error => console.log(error))
        }

        fetchTest()
    }, [])

    return (
        <main className='registry'>
            <div className="background_registry"></div>
            <img className='background_image' src="https://res.cloudinary.com/sena-quindio/image/upload/v1652153285/nt4veg6nluasxa29vxnp.png" alt="" />

            <div className="center_main_registry">

                <DivShadow className='container_form_registry'>
                    <div className="padding_form_register">


                        <header className='header_registry'>
                            <Title>Registro</Title>
                            <Link className='link_login_form_register' to='/login'>¿Ya tienes una cuenta?</Link>
                        </header>

                        <section className="steps_registry">
                            {
                                steps.map(item => (
                                    <>
                                        <div className={`step ${item.current && 'current_step'} ${item.complete && 'complete_step'}`} >
                                            <div className='step_number'>
                                                {item.step}
                                            </div>
                                            <p className='step_info'>{item.info}</p>
                                        </div>
                                        <div className={`c_line_step ${item.current && 'line_current'} ${item.complete && 'line_complete'}`}>
                                            <div className={`line_step`}></div>
                                        </div>
                                    </>
                                ))
                            }
                        </section>

                        <div className='form_registry'>

                            {
                                currentStep == 1 && (
                                    <>
                                        <section className="acount_data">

                                            <InputTextLabel titleLabel='Email' {...email} placeholder='Correo' />

                                            <InputTextLabel titleLabel='Contraseña' {...password} placeholder='Contraseña' />

                                        </section>
                                        <Button value='Siguiente' onClick={() => {
                                            email.validator(email.value)
                                            password.validator(password.value)
                                            if (email.validator(email.value) && password.validator(password.value))
                                                changeStep(currentStep + 1)
                                        }} />
                                    </>
                                )

                            }
                            {
                                currentStep == 2 && (
                                    <>
                                        <section className="basic_data">

                                            <InputTextLabel titleLabel='Nombres' {...name} placeholder='Camilo' />

                                            <InputTextLabel titleLabel='Apellidos' {...surname} placeholder='Lopez' />

                                            <InputTextLabel titleLabel='Celular' {...phone} placeholder='Celular' />

                                            <InputTextLabel titleLabel='Fecha de nacimiento' {...birthday} />

                                            <SelectTextLabel
                                                titleLabel='Departamento'
                                                nameSelect='Departamento'
                                                options={departments}
                                                disable={false}
                                                onChange={e => {
                                                    getCities(e.target.value)
                                                }} />

                                            <SelectTextLabel
                                                titleLabel='Ciudad'
                                                nameSelect='Ciudad'
                                                options={cities}
                                                disable={disable}
                                                onChange={e => setCity(e.target.value)}
                                            />

                                        </section>

                                        <Button value='Siguiente' onClick={() => {
                                            name.validator(name.value)
                                            surname.validator(surname.value)
                                            phone.validator(phone.value)
                                            birthday.validator(phone.value)
                                            if (name.validator(name.value) && surname.validator(surname.value) && phone.validator(phone.value) && birthday.validator(birthday.value) )
                                                changeStep(currentStep + 1)
                                            }
                                            } />
                                    </>
                                )
                            }

                            {
                                currentStep == 3 && (
                                    <>
                                        <section className="profile_user">
                                            <header className="">
                                                <h1 className='title_preview_image_profile'>Añade una imagen</h1>

                                                <input className='input_file_image_profile' type="file" name="" id="file_image_user" onChange={e => {
                                                    setPreviewImage(e)
                                                    setImageFile(e.target.files[0])
                                                }} accept="image/*" />
                                                <section className='preview_image_profile'>

                                                    <label htmlFor="file_image_user">
                                                        <div className="image_profile_registry">
                                                            { previewImage ?

                                                                <img className='image_preview_profile' src={previewImage} alt="" />

                                                                :
                                                                <IconPlus className='icon_plus_image' />
                                                            }
                                                        </div>
                                                    </label>
                                                    {
                                                        previewImage && (
                                                            <div className="button_upload_image_profile">
                                                                <Button value='Subir' isLoading={loadingImage} onClick={() => uploadImage(imageFile)} />
                                                            </div>
                                                        )
                                                    }
                                                </section>
                                            </header>
                                        </section>
                                        <Button value='Registrate' onClick={() => registry()} />
                                    </>
                                )
                            }

                        </div>
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