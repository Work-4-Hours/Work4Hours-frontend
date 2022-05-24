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
    const [infoUser, setInfoUser] = useState({})
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
                    setService(response.serviceInfo)
                    setInfoUser(response.serviceUser)   

                })
                .finally(() => setLoading(false))
        }
        get()
    }, [])
    
    return (
        <>
            <Header />
            <main className='main_info_service'>
                <div className="center_info_service">
                    <section className="image_service_">
                        <DivShadow>
                            <div className="subtitle_image_info_service">
                                Trabajos realizados por {infoUser?.name}
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
                                        <Link to={`/profile/user?id=${27}`}>
                                            <PhotoUserProfile infoProfile={{ name: infoUser?.name, color: infoUser?.color, userPicture: infoUser.photo }} style='small_profile' small={true} />
                                        </Link>
                                        <p className='name_user_info_service'>{infoUser?.name}</p>
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
                                        <p className='location_name'>{service.city_name} • {service.department_name}</p>
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

                        <DivShadow>
                            <div className="padding_info_service">
                                <p className='name_user_info_service'>Comentarios</p>
                                <p className='description_info_service'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat esse officia, quisquam obcaecati at voluptates corrupti soluta impedit enim id.</p>
                            </div>
                        </DivShadow>
                    </section>

                </div>
            </main>
        </>
    )
}