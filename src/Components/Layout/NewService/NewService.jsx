import React, { useState } from 'react'
import { useField } from 'CustomHooks/useField'
import { useManageServices } from 'CustomHooks/useManageServices'
import { regex_number, } from 'Validations/RejexForms'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { SelectTextLabel } from 'Components/Ui/SelectTextLabel/SelectTextLabel'
import { useImagePreview } from 'CustomHooks/useImagePreview'
// import { ReactComponent as IconAddImage } from 'Assets/Icons/IconAddImage.png'
import { ReactComponent as IconPlus } from 'Assets/Icons/IconPlus.svg'

import './NewService.css'
import { useUploadImage } from 'CustomHooks/useUploadImage'

export const NewService = () => {

    const { createService } = useManageServices()
    const { previewImage, setPreviewImage } = useImagePreview()
    const { data: image_service, uploadImage } = useUploadImage()
    const [test, setTest] = useState()

    function agregarSeparadorMiles(numero) {
        let partesNumero = numero.toString().split(',');
    
        partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
        return partesNumero.join(',');
    }

    const [imageFile, setImageFile] = useState(null);
    const name = useField({ type: 'text' })
    const price = useField({ type: 'number', validate: regex_number, message_errors: 'Ingrese un nombre de servicio valido' })
    const description = useField({ type: 'text' })
    const [type, setType] = useState(null);
    const [status, setStatus] = useState(null);

    return (
        <>

            <h1 className='title_new_service'>Nuevo servicio</h1>
            <section className='section_form_new_service'>

                <form className='form_new_service' onSubmit={async e => {
                    e.preventDefault()
                    createService({
                        categories: 'C01',
                        name: name.value,
                        statuses: status,
                        type: type,
                        price: parseInt(price.value),
                        description: description.value,
                        photo: image_service,
                    })
                   
                }}>
                    <InputTextLabel titleLabel='Nombre del servicio'  {...name} placeholder='Profesor' />

                    <InputTextLabel titleLabel='Precio del servicio'  {...price} placeholder='000000' />
                    <section className="state_new_service">

                        <SelectTextLabel
                            titleLabel='Tipo de servicio'
                            nameSelect='Tipo'
                            options={[{ id: 'Oferta', name: "Oferta" }, { id: 'Demanda', name: "Demanda" }]}

                            onChange={(e) => setType(e.target.value)}
                        />
                        <SelectTextLabel
                            titleLabel='Visualizacion'
                            nameSelect='Tipo de de visualizacion'
                            options={[{ id: 4, name: "Visible" }, { id: 5, name: "Borrador" }]}

                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </section>

                    <InputTextLabel titleLabel='Descripcion del servicio' {...description} placeholder='Detalle su peticion o prestacion de su servicio' />

                    <Button value={`${status == 1 ? 'Publicar servicio' : 'Guardar borrador'}`} />
                </form>


                <div className="preview_image_service">
                    <input className='input_preview_image_service' type="file" name="" id="preview_image_service" onChange={e => {
                        setPreviewImage(e)
                        setImageFile(e.target.files[0])
                    }} />
                    <label className='label_preview_image_service' htmlFor="preview_image_service">
                        <div className="open_preview_image_service">
                            {
                                previewImage ?
                                    <>
                                        <div className="quit_preview_image">
                                            <div className='information_quit_preview_image'>Cambiar imagen</div>
                                        </div>
                                        <img src={previewImage} alt="" />
                                    </>
                                    :
                                    <div className="info_add_image">
                                        <p className='information_add_image'>Click para agregar una imagen</p>
                                        <IconPlus className='icon_plus_add_image' />
                                    </div>
                            }
                        </div>
                            {
                                previewImage && (
                                    <Button value='Guardar imagen' onClick={() => uploadImage(imageFile)} />
                                )
                            }
                    </label>
                </div>
            </section>
        </>
    )
}
