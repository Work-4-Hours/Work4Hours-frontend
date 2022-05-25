import React, { useContext, useState } from 'react'
import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { Title } from 'Components/StyleComponets/Titlte'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { InputSelect } from 'Components/Ui/InputSelect/InputSelect'
import { SelectTextLabel } from 'Components/Ui/SelectTextLabel/SelectTextLabel'
import IconAddImage from 'Assets/Icons/IconAddImage.png'
import { Button } from 'Components/Ui/Button/Button'
import { InputCheckbox } from 'Components/Ui/InputCheckbox/InputCheckbox'

import './AddService.css'
import { useUploadImage } from 'CustomHooks/useUploadImage'
import { useEffect } from 'react'
import { LoadingAnimation } from 'Components/Ui/LoadingAnimation/LoadingAnimation'
import { UserContext } from 'Context/UserContext'
import jwt_decode from 'jwt-decode'

export const AddService = () => {

    const { loading, data, uploadImage } = useUploadImage();
    const { getJwt } = useContext(UserContext)

    const [loadingCreate, setLoadingCreate] = useState(null);
    const [name, setName] = useState(null);
    const [type, setType] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [price, setPrice] = useState(null);
    const [status, setStatus] = useState(null);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState(null);

    const createService = async () => {
        setLoadingCreate(true)
        fetch(`${process.env.REACT_APP_API}/serviceRegistry`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWS ${getJwt()}`
            },
            body: JSON.stringify({
                categories: 'C01',
                name: name,
                statuses: status,
                type: type,
                price: parseInt(price),
                description: description,
                photo: '',
                user: parseInt(jwt_decode(getJwt()).id)
            })

        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .finally(setLoadingCreate(false))
    }

    useEffect(() => {
        console.log(data);
    },[loading])

    return (
        <>
            <Header />
            <main className='main_add_service'>
                <div className="center_main_add_service">

                    <DivShadow className='image_add'>
                        <input type="file" name="" id="input_file_image" onChange={e => uploadImage(e.target.files[0])} />
                        <label htmlFor="input_file_image">
                            <div className="drag_drop_image">
                                <img className='icon_add_image' src={IconAddImage} alt="" />
                                <p className='info_drag_drop_image'>Agregue una imagen relacionada con su servicio</p>
                            </div>
                        </label>
                    </DivShadow>

                    <DivShadow className='form_add_service'>
                        <div className="padding_form_add_service">
                            <Title className='title_add_service'>Nuevo servicio</Title>
                            <form action="" className='form_register_service'>
                                <InputTextLabel titleLabel='Nombre del servicio' placeholder='Servicio' onChange={e => setName(e.target.value)} />

                                <InputTextLabel titleLabel='Precio por hora' placeholder='Precio' onChange={e => setPrice(e.target.value)} />

                                <InputTextLabel titleLabel='Descriptcion' placeholder='Lorem' onChange={e => setDescription(e.target.value)} />

                                <SelectTextLabel
                                    titleLabel='Tipo de servicio'
                                    nameSelect='Tipo'
                                    options={[{ id: 'O', name: "Oferta" }, { id: 'D', name: "Demanda" }]}
                                    onChange={(e) => setType(e.target.value)}
                                />
                                <InputCheckbox name='Habilitar servicio' onChange={e => setStatus(e.target.checked ? '1' : '3')} />
                            </form>
                        </div>
                        <div className="flex_button_register_service">
                            <Button style='button_big' value='Publicar servicio' isLoading={loadingCreate} onClick={createService} />
                        </div>
                    </DivShadow>

                </div>
            </main>
        </>
    )
}