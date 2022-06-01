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
import { useLogin } from 'CustomHooks/useLogin'
import { useNotification } from 'CustomHooks/useNotification'

export const InfoService = () => {

    const [params, setParams] = useSearchParams()
    const { user, getJwt, sendNotification } = useContext(UserContext)
    const [loading, setLoading] = useState(null)
    const [service, setService] = useState({})
    const [infoUser, setInfoUser] = useState({})
    const [userId, setUserId] = useState(null)
    const [isOpen, setIsOpen] = useState(false)


    const createRoom = (serviceuser, idservice) => {
        fetch(`${process.env.REACT_APP_API_CS}/Room/room/new/${jwt_decode(user.token).userId}/${jwt_decode(serviceuser).userId}/${idservice}`, {
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
        
        sendNotification(jwt_decode(serviceuser).userId, `${service?.name} ha sido solucitado`, `${infoUser?.name}`, `${infoUser?.color}`, `${infoUser?.photo}`)
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
                    setService(response[0].serviceInfo)
                    setInfoUser(response[0].serviceUser)
                    // console.log(response[0]);
                    // console.log(jwt_decode(response[0].serviceInfo.user).userId);
                    setUserId(jwt_decode(response[0].serviceInfo.user).userId)

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
                                {
                                    loading ?
                                        <div className="text_loading"></div>
                                        :
                                        <p>
                                            Trabajos realizados por {infoUser?.name}
                                        </p>
    
                                }
                            </div>
                            <div className="image_info_service">
                                {
                                    loading ?
                                        <div className="image_service_loading"></div>
                                        :
                                        <img className='image_service' src={service?.photo} alt="" />
                                }
                            </div>
                        </DivShadow>
                    </section>
                    <section className="information_service_">

                        <DivShadow>
                            {
                                loading ?
                                    <div className='animation_loading_info_service'>
                                        <div className="padding_info_service">
                                            <header className="header_info_service">
                                                <div className="user_profile">
                                                    <div className="circle_profile_loading">
                                                    </div>
                                                    <p className='name_user_info_service text_loading'></p>
                                                </div>
                                            </header>

                                            <div className="title_info_service">
                                                <p className='tipe_info_service '></p>
                                                <h1 className='title_name_service text_loading_title'></h1>
                                                <div className="location_info_service animation_location">
                                                    <p className='location_name text_loading'></p>
                                                    <p className='location_name text_loading'></p>
                                                </div>
                                            </div>

                                            <p className='price_info_service text_loading'></p>

                                            <div>
                                                <div className="description_info_service">
                                                    <p className='subtitle_info_service text_loading'></p>
                                                    <p className='description_info_service paragraph_loading'></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <div className="padding_info_service">
                                            <header className="header_info_service">
                                                <div className="user_profile">
                                                    {
                                                        loading ?
                                                            <p>...</p>
                                                            :
                                                            <Link to={`/profile/user?id=${userId}`}>
                                                                <PhotoUserProfile infoProfile={{ name: infoUser?.name, color: infoUser?.color, userPicture: infoUser?.photo }} style='small_profile' small={true} />
                                                            </Link>
                                                    }
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
                                                <p className='tipe_info_service'>{service?.type}</p>
                                                <h1 className='title_name_service'>{service?.name}</h1>
                                                <div className="location_info_service">
                                                    <IconLocation className='icon_location_info_service' />
                                                    <p className='location_name'>{service?.city_name} • {service?.department_name}</p>
                                                </div>
                                            </div>

                                            <p className='price_info_service'>$ {service?.price} por hora</p>

                                            <div>
                                                <div className="description_info_service">
                                                    <p className='subtitle_info_service'>Descripcion del servicio</p>
                                                    <p className='description_info_service'>{service?.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='button_contact'>
                                            <Button style='button_big' value='Contactar' onClick={() => createRoom(service?.user, service?.id)} />
                                        </div>
                                    </>
                            }
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