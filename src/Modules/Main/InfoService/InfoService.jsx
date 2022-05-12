import React, { useContext, useEffect, useState } from 'react'
import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { PopUp } from 'Components/StyleComponets/PopUp'
import { PhotoUserProfile } from 'Components/Ui/PhotoUserProfile/PhotoUserProfile'
import { ReactComponent as IconFlag } from 'Assets/Icons/IconFlag.svg'
import { ReactComponent as IconLocation } from "Assets/Icons/IconLocation.svg"
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from 'Components/Ui/Button/Button'
import jwt_decode from 'jwt-decode'
import { UserContext } from 'Context/UserContext'

import './InfoService.css'

export const InfoService = () => {

    const [params, setParams] = useSearchParams()
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [service, setService] = useState({})
    const [isOpen, setIsOpen] = useState(false)

    const createRoom = (serviceuser, idservice) => {
        fetch(`${process.env.REACT_APP_API_CS}/Room/room/new/${jwt_decode(user.token).id}/${jwt_decode(serviceuser).userId}/${idservice}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response.json())
        .then(response => {
            setService(response)
            console.log(response);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            fetch(`${process.env.REACT_APP_API}/serviceInfo/${params.get('sid')}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(response => response.json())
                .then(response => {
                    setService(response)
                })
                .finally(() => setLoading(false))
        }
        get()
    }, [])

    const profile = {
        color: "#a11d1d",
        imageprofile: "",
        name: "Alverto",
        email: "carlos@gmail.com",
        phone: "3166529009",
        calification: 73.6
    }

    // const service = {
    //     price: "200.000",
    //     type: "Oferta",
    //     photo: "https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png",
    //     city_name: "Armenia",
    //     departament_name: "Quindio",
    //     name: "Pinto casas a domicilio Lorem",
    //     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio fugit, corporis earum rerum velit delectus consequuntur vero vel voluptates ducimus dolores dolor inventore vitae labore natus suscipit. Voluptatum, minima. Numquam."
    // }

    return (
        <>
            <Header />
            <main className='main_info_service'>
                <div className="center_info_service">
                    <section className="image_service_">
                        <DivShadow>
                            <div className="subtitle_image_info_service">
                                Trabajos realizados por {profile.name}
                            </div>
                            <div className="image_info_service">
                                <img className='image_service' src={service.photo} alt="" />
                            </div>
                        </DivShadow>
                    </section>
                    <section className="information_service_">
                        <DivShadow>
                            <div className="padding_info_service">
                                <header className="header_info_service">
                                    <div className="user_profile">
                                        <PhotoUserProfile infoProfile={profile} style='small_profile' small={true} />
                                        <p className='name_user_info_service'>{profile.name}</p>
                                    </div>

                                    <div className='btn_report' onClick={e => setIsOpen(!isOpen)}>

                                        <div className="elements_btn_report">
                                            <p className='report'>Reportar</p>
                                            <IconFlag className='icon_flag_btn_report' />
                                        </div>

                                        <PopUp className='popup_report' isOpen={isOpen} bg='#FFFF'>
                                            <div className="padding_popup_report">
                                                <p className='subtitle_popup_report'>Seleccione un motivo</p>
                                                <div className="options_report">
                                                    <Link to=''>Abuso</Link>
                                                    <Link to=''>Contenido indebido</Link>
                                                    <Link to=''>Contenido ofensivo</Link>
                                                </div>
                                            </div>
                                        </PopUp>
                                    </div>
                                </header>



                                <div className="title_info_service">
                                    <p className='tipe_info_service'>{service.type}</p>
                                    <h1 className='title_name_service'>{service.name}</h1>
                                    <div className="location_info_service">
                                        <IconLocation className='icon_location_info_service' />
                                        <p className='location_name'>{service.city_name} {service.department_name}</p>
                                    </div>
                                </div>

                                <p className='price_info_service'>$ {service.price} por hora</p>

                                <div>
                                    <div className="description_info_service">
                                        <p className='subtitle_info_service'>Descripcion del servicio</p>
                                        <p className='description_info_service'>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='button_contact'>
                                <Button style='button_big' value='Contactar' onClick={() => createRoom(service.user, service.id)} />
                            </div>
                        </DivShadow>
                    </section>

                </div>
            </main>
        </>
    )
}