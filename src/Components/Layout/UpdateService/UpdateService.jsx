import React, { useEffect, useState } from 'react'
import { useField } from 'CustomHooks/useField'
import { useManageServices } from 'CustomHooks/useManageServices'
import { regex_number, } from 'Validations/RejexForms'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { SelectTextLabel } from 'Components/Ui/SelectTextLabel/SelectTextLabel'
import { useImagePreview } from 'CustomHooks/useImagePreview'
import { ReactComponent as IconPlus } from 'Assets/Icons/IconPlus.svg'
import { useUploadImage } from 'CustomHooks/useUploadImage'
import { Alert } from 'Components/StyledComponets/Alert'
import { useLocalStorage } from 'CustomHooks/useLocalStorage'
import { sha256 } from 'js-sha256'

import './UpdateService.css'
import 'Components/Layout/NewService/NewService.css'

export const UpdateService = () => {

    const { updateService, loading: loading_registry, data: update_resutl } = useManageServices()
    const { previewImage, setPreviewImage, setPreviewImages } = useImagePreview()
    const { data: image_service, setData,uploadImage, loading } = useUploadImage()
    const [infoservice] = useLocalStorage(sha256('idservice'), null)
    const { id, service } = infoservice

    const [imageFile, setImageFile] = useState(null);
    const name = useField({ type: 'text', initial_value: service.name })
    const price = useField({ type: 'number', initial_value: service.price, validate: regex_number, message_errors: 'Ingrese un nombre de servicio valido' })
    const description = useField({ type: 'text', initial_value: service.description })
    const [type, setType] = useState(service.type);
    const [status, setStatus] = useState(service.status);

    useEffect(() => {
        setPreviewImages(service.photo)
        setData(service.photo)

        loading_registry == false && console.log(update_resutl);
    }, [loading_registry])

    return (
        <>

            <h1 className='title_new_service'>Actualizar informacionde : {service.name}</h1>
            <section className='section_form_new_service'>

                <form className='form_new_service' onSubmit={async e => {
                    e.preventDefault()
                    updateService({
                        id: id,
                        name: name.value,
                        type: type,
                        photo: image_service,
                        price: parseInt(price.value),
                        category: 'C01',
                        description: description.value,
                        status: status
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
                            options={[{ id: 1, name: "Visible" }, { id: 4, name: "Borrador" }]}

                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </section>

                    <InputTextLabel titleLabel='Descripcion del servicio' {...description} placeholder='Detalle su peticion o prestacion de su servicio' />

                    <Button value={`${status == 1 ? 'Actualizar informacion' : 'Guardar borrador'}`}  isLoading={loading_registry} />

                    <Alert isAlert={update_resutl}>
                        <p className='alert_update_service'>Alerta</p> 
                        <p>Servicio actualzado correctamente</p> 
                    </Alert>
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
                                <Button value='Guardar imagen' onClick={() => uploadImage(imageFile)} isLoading={loading} />
                            )
                        }
                    </label>
                </div>
            </section>
        </>
    )
}
