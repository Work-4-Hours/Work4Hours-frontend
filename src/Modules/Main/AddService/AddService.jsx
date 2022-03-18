import React from 'react'
import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { Title } from 'Components/StyleComponets/Titlte'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { InputSelect } from 'Components/Ui/InputSelect/InputSelect'
import { SelectTextLabel } from 'Components/Ui/SelectTextLabel/SelectTextLabel'
import  IconAddImage  from 'Assets/Icons/IconAddImage.png'

import './AddService.css'

export const AddService = () => {

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
                        <Title className='title_add_service'>Nuevo servicio</Title>
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
                                active={false}
                            />
                        </form>
                    </DivShadow>
                    
                </div>
            </main>
        </>
    )
}