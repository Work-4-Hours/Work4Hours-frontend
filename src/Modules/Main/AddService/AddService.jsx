import React from 'react'
import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import  IconAddImage  from 'Assets/Icons/IconAddImage.png'


import './AddService.css'
import { Title } from 'Components/StyleComponets/Titlte'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'

export const AddService = () => {

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

                        </form>
                    </DivShadow>
                    
                </div>
            </main>
        </>
    )
}