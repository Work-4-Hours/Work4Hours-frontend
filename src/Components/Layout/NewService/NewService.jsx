import React, { useEffect, useState } from 'react'
import { useField } from 'CustomHooks/useField'
import { useManageServices } from 'CustomHooks/useManageServices'
import { regex_number, } from 'Validations/RejexForms'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { SelectTextLabel } from 'Components/Ui/SelectTextLabel/SelectTextLabel'
import { useImagePreview } from 'CustomHooks/useImagePreview'
// import { ReactComponent as IconAddImage } from 'Assets/Icons/IconAddImage.png'
import { ReactComponent as IconPlus } from 'Assets/Icons/IconPlus.svg'
import { useUploadImage } from 'CustomHooks/useUploadImage'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './NewService.css'
import { useNavigate } from 'react-router'
import { useFetch } from 'CustomHooks/useFetch'

export const NewService = () => {

    const [categories, setCategories] = useState()
    
    const service_added_successfully = () => toast.success('Servicio agregado exitosamente', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const error_to_create_service = () => toast.error('Error en la creacion del servicio', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const navigate = useNavigate()

    useEffect(() => {
        const fetchTest = async () => {
            fetch(`${process.env.REACT_APP_API_PRODUCTION}/categories`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(response => response.json())
                .then(response => {
                    setCategories(response.map(item => {
                        return { id: item.categId, name: item.categoryName }
                    }))

                })
                .catch(error => console.log(error))
        }

        fetchTest()
    }, [])

    const { createService, loading } = useManageServices()
    const { previewImage, setPreviewImage } = useImagePreview()
    const { data: image_service, uploadImage, loading: loading_image } = useUploadImage()
    
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
    const [category, setCategory] = useState(null);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <h1 className='title_new_service'>Nuevo servicio</h1>
            <section className='section_form_new_service'>

                <form className='form_new_service' onSubmit={e => {
                    e.preventDefault()

                    try {
                        createService({
                            categories: category,
                            name: name.value,
                            statuses: status,
                            type: type,
                            price: parseInt(price.value),
                            description: description.value,
                            photo: image_service,
                        })

                        service_added_successfully()

                        navigate('/dashboard/all')

                    } catch (error) {
                        error_to_create_service()
                    }
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
                            titleLabel='Seleccione una categoria'
                            nameSelect='Categoria'
                            options={categories}

                            onChange={(e) => setCategory(e.target.value)}
                        />

                        <SelectTextLabel
                            titleLabel='Visualizacion'
                            nameSelect='Tipo de de visualizacion'
                            options={[{ id: 1, name: "Visible" }, { id: 2, name: "Borrador" }]}

                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </section>

                    <InputTextLabel titleLabel='Descripcion del servicio' {...description} placeholder='Detalle su peticion o prestacion de su servicio' />

                    <Button value={`${status == 1 ? 'Publicar servicio' : 'Guardar borrador'}`} isLoading={loading} />
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
                                <Button value='Guardar imagen' onClick={() => uploadImage(imageFile)} isLoading={loading_image} />
                            )
                        }
                    </label>
                </div>
            </section>
        </>
    )
}
