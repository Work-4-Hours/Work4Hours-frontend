import React, { useContext, useEffect, useState } from 'react'
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
import { useLocalStorage } from 'CustomHooks/useLocalStorage'
import { sha256 } from 'js-sha256'

import './EditService.css'

export const EditService = () => {

    const { getJwt } = useContext(UserContext)
    const [infoservice] = useLocalStorage(sha256('idservice'),null)
    const [loading, setLoading] = useState(null);
    const {id, service} = infoservice

    const [name, setName] = useState(service.name);
    const [type, setType] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [price, setPrice] = useState(service.price);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState(service.description);


    const updateService = async (e) => {
        e.preventDefault()
        setLoading(true)
        fetch(`${process.env.REACT_APP_API}/updateService`, {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`JWS ${getJwt()}`
            },
            body: JSON.stringify({
                id: id,
                name: name,
                type: type,
                photo: service.photo,
                price: parseInt(price),
                category: 'C01',
                description: description
            })
        
        })
        .then(response => response.json())
        .then(response => {
           console.log(response);
        })
        .finally(setLoading(false))
    }

    return (
        <>
            <Header/>
            <main className='main_add_service'>
                <div className="center_main_add_service">
                    <DivShadow className='_image_add'>
                    {/* <img src={service.photo} alt="" /> */}
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
                        <form className='form_register_service'>
                            
                                <InputTextLabel titleLabel='Nombre' value={name} type='text' onChange={e => setName(e.target.value)}/>

                                <InputTextLabel titleLabel='Precio por hora' value={price} type='number' onChange={e => setPrice(e.target.value)}/>

                                <InputTextLabel titleLabel='Descripcion' value={description} type='text' onChange={e => setDescription(e.target.value)} />
                                <SelectTextLabel 
                                    titleLabel='Tipo de servicio' 
                                    nameSelect='Tipo' 
                                    options={[{id: 'O', name: "Oferta" }, {id: 'D', name: "Demanda" }]}                          
                                    onChange={e => {setType(e.target.value)}}                              
                                />
                                <InputCheckbox name='Habilitar servicio' onClick={e => console.log(e.target.value, '')}/>
                            </form>
                        </div>
                        <div className="flex_button_register_service">
                            <Button style='button_big' value='Guardar cambios' isLoading={loading} onClick={e => updateService(e) } />
                        </div>

                    </DivShadow>
                    
                </div>
            </main>
        </>
    )
}