import React, { useContext } from 'react'
import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { Title } from 'Components/StyleComponets/Titlte'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { InputSelect } from 'Components/Ui/InputSelect/InputSelect'
import { SelectTextLabel } from 'Components/Ui/SelectTextLabel/SelectTextLabel'
import  IconAddImage  from 'Assets/Icons/IconAddImage.png'
import { Button } from 'Components/Ui/Button/Button'
import { InputCheckbox } from 'Components/Ui/InputCheckbox/InputCheckbox'
import { UserContext } from 'Context/UserContext'

import './EditService.css'

export const EditService = () => {

    const { getJwt } = useContext(UserContext)
    
    const updateService = async () => {
        fetch(`${process.env.REACT_APP_API}/updateService`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization':`Bearer ${getJwt()}`
            },
            body: JSON.stringify({
                
            })
        
        })
        .then(response => response.json())
        .then(user => {
           console.log(user);
        })
        .finally()
    }
    
    const optionsl = [
        {
            id: 1,
            name: "Quindio"
        },
        {
            id: 2,
            name: "Choco"
        }
    ]

    const ciudadl = [
        {
            id: 1,
            name: "Armenia"
        },
        {
            id: 2,
            name: "Montenegro"
        }
    ]

    const tipos = [
        {
            id: 1,
            name: "Oferta"
        },
        {
            id: 2,
            name: "Demanda"
        }
    ]


    return (
        <>
            <Header/>
            <main className='main_add_service'>
                <div className="center_main_add_service">
                    <DivShadow className='image_add'>
                        <input type="file" name="" id="input_file_image" />
                        <label htmlFor="input_file_image">
                            <div className="drag_drop_image">
                                <img className='icon_add_image' src={IconAddImage} alt="" />
                                <p className='info_drag_drop_image'>Agregue una imagen relacionada con su servicio</p>
                            </div>
                        </label>
                    </DivShadow>
                    <DivShadow className='form_add_service'>
                        <div className="padding_form_add_service">              
                            <Title className='title_add_service'>Editar servicio</Title>
                            <form action="" className='form_register_service'>
                                <InputTextLabel titleLabel='Titulo' placeholder='Servicio' />

                                <InputTextLabel titleLabel='Precio por hora' placeholder='' />

                                <InputTextLabel titleLabel='Descriptcion' placeholder='Lorem' />

                                <SelectTextLabel 
                                    titleLabel='Seleccione el departamento donde se ofrese el servicio' 
                                    nameSelect='Departamento' 
                                    options={optionsl}                          
                                    onChange={(e)=> console.log(e.target.value)}
                                />

                                <SelectTextLabel 
                                    titleLabel='Seleccione la ciudad donde se ofrece el servicio' 
                                    nameSelect='Ciudad' 
                                    options={ciudadl}                          
                                    onChange={(e)=> console.log(e.target.value)}                              
                                />

                                <SelectTextLabel 
                                    titleLabel='Tipo de servicio' 
                                    nameSelect='Tipo' 
                                    options={tipos}                          
                                    onChange={(e)=> console.log(e.target.value)}                              
                                />
                                <InputCheckbox name='Habilitar servicio'/>
                            </form>
                        </div>
                        <div className="flex_button_register_service">
                            <Button style='button_big' value='Guardar cambios' />
                        </div>
                    </DivShadow>
                    
                </div>
            </main>
        </>
    )
}