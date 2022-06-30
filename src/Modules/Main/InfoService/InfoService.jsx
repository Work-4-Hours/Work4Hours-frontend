import React, { useContext, useEffect, useState } from 'react'
import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyledComponets/DivShadow'
import { PopUp } from 'Components/StyledComponets/PopUp'
import { PhotoUserProfile } from 'Components/Ui/PhotoUserProfile/PhotoUserProfile'
import { ReactComponent as IconFlag } from 'Assets/Icons/IconFlag.svg'
import { ReactComponent as IconLocation } from "Assets/Icons/IconLocation.svg"
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { Button } from 'Components/Ui/Button/Button'
import jwt_decode from 'jwt-decode'
import { UserContext } from 'Context/UserContext'
import { useNotification } from 'CustomHooks/useNotification'
import { useLogin } from 'CustomHooks/useLogin'

import './InfoService.css'
import { Alert } from 'Components/StyledComponets/Alert'

export const InfoService = () => {


    const [params, setParams] = useSearchParams()
    const { user, getJwt, sendNotification } = useContext(UserContext)
    const [loading, setLoading] = useState(null)
    const [service, setService] = useState({})
    const [infoUser, setInfoUser] = useState({})
    const [userId, setUserId] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [loadingCreateRoom, setLoadingCreateRoom] = useState(null)

    const navigate = useNavigate()

    const [isCreateRoom, setIsCreateRoom] = useState(false);

    const createRoom = (serviceuser, idservice) => {
        setLoadingCreateRoom(true)
        fetch(`${process.env.REACT_APP_API_CS}/Room/room/new/${jwt_decode(user.token).userId}/${jwt_decode(serviceuser).userId}/${idservice}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(response => {
                setIsCreateRoom(response)
                // console.log(response);
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoadingCreateRoom(false)
                navigate('/chat')
            })
        sendNotification(jwt_decode(serviceuser).userId, `Tu servicio ${service?.name} ha sido solucitado`, `${infoUser?.name}`, `${infoUser?.color}`, `${infoUser?.photo}`)
    }

    const reportService = (idreport) => {
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/report/${service.id}/${service.user }/${idreport}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JSW ${getJwt()}`
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);                
            })
            .catch(error => console.log(error))
            .finally(() => {
                console.log('XED');
            })
    }


    useEffect(() => {
        const get = async () => {
            setLoading(true)
            fetch(`${process.env.REACT_APP_API_PRODUCTION}/serviceInfo/${params.get('sid')}`, {
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
                    // console.log(response);
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
                                                    {/* {
                                                        loading ?
                                                            <p>...</p>
                                                            :
                                                            <Link to={`/profile/user?id=${userId}`}>
                                                                <PhotoUserProfile infoProfile={{ name: infoUser?.name, color: infoUser?.color, userPicture: infoUser?.photo }} style='small_profile' small={true} />
                                                            </Link>
                                                    } */}
                                                    {/* <p className='name_user_info_service'>{infoUser?.name}</p> */}
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
                                                                <p onClick={e => reportService(1)}>Contenido ofensivo</p>
                                                                <p onClick={e => reportService(2)}>Abuso</p>
                                                                <p onClick={e => reportService(3)}>Contenido indebido</p>
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

                                            <Button style='button_big' value='Contactar' onClick={() => createRoom(service?.user, service?.id)} isLoading={loadingCreateRoom} />
                                        </div>
                                    </>
                            }
                        </DivShadow>

                        <DivShadow className='information_user'>
                            {
                                loading ?
                                    <>
                                        <div className="photo_user_profile"></div>
                                        <div className="padding_info_user_">
                                            <h1 className='title_name_service text_loading_title user_name_loading'></h1>
                                            <p className='subtitle_info_service text_loading'></p>
                                            <p className='subtitle_info_service text_loading'></p>
                                            <div className="button_info_service">
                                                <p className='subtitle_info_service text_loading'></p>
                                            </div>
                                        </div>

                                    </>

                                    :
                                    <>
                                        <PhotoUserProfile infoProfile={{ name: infoUser.name, color: infoUser.color, userPicture: infoUser.photo }} style='medium_profile' small={false} />
                                        <div className="padding_info_user_">
                                            <p className='name_user_profile_service'>{infoUser.name}</p>
                                            <p className='email_user_info_service'>{infoUser.email}</p>
                                            <p className='phone_number_info_service'>{infoUser.phoneNumber}</p>
                                            <div className="button_info_service">
                                                <Link className='link_profile_info_user' to={`/profile/user?id=${userId}`}>
                                                    <Button value='Ver perfil' />
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                            }
                        </DivShadow>
                        {/* <DivShadow>
                            <div className="padding_info_service">
                                <p className='name_user_info_service'>Comentarios</p>
                                <p className='description_info_service'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat esse officia, quisquam obcaecati at voluptates corrupti soluta impedit enim id.</p>
                            </div>
                        </DivShadow> */}
                    </section>

                </div>
            </main>
        </>
    )
}