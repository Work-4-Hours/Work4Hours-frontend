import { Header } from 'Components/Layout/Header/Header'
import { DivShadowDark } from 'Components/StyledComponets/DivShadowDark'
import { Title } from 'Components/StyledComponets/Titlte'
import { Button } from 'Components/Ui/Button/Button'
import { LinkOption } from 'Components/Ui/LinkOption/LinkOption'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import { PhotoUserProfile } from 'Components/Ui/PhotoUserProfile/PhotoUserProfile'
import { DivShadow } from 'Components/StyledComponets/DivShadow'
import { UserContext } from 'Context/UserContext'
import jwt_decode from 'jwt-decode'

import './Dashboard.css'

export const Dashboard = () => {

    const { user } = useContext(UserContext)
    const info_user = user.info[0]

    return (
        <>
            <Header />
            <main className='main_dasboard'>
                <div className="center_dashboard">

                    <DivShadow className='personal_info'>
                        <div className="image_profile_dashboard">
                            {/* <img className='image_my_profile' src={user.info[0].userPicture} alt="" /> */}

                            <PhotoUserProfile infoProfile={{ name: info_user.name, color: info_user.color, userPicture: info_user.userPicture }} style='medium_profile' small={false} />

                            <div className="information_user_profile_dashboard">

                                <p className='name_user_profile_dashboard'>{info_user.name} {info_user.lastName}</p>
                                <p className='email_user_profile_dashboard'>{info_user.email}</p>

                                <p className='phone_user_profile_dashboard'>{info_user.phoneNumber}</p>
                                <Link className='link_profile_info_user' to={`/profile/user?id=${jwt_decode(user.token).userId}`}>
                                    <Button value='Mi perfil' />
                                </Link>
                            </div>

                        </div>

                    </DivShadow>

                    <DivShadow className='main_dashboard_'>
                        {/* <Link to="/"><img className="logo_app_dashboard" src="https://res.cloudinary.com/sena-quindio/image/upload/v1646884944/qqdviu6wbgeum4hpp5m6.png" alt="" /></Link> */}
                        <p className='title_dashboard_info_small'>Panel</p>
                        <p className='title_dashboard_info'>Administrar servicios</p>

                        <section className='nav_show_services'>
                            <div className="options_show_my_services">
                                <p className='show_only_title'>Mostrar solo:</p>
                                
                                <div className="options_show_">
                                    <NavLink className='link_add_service' to='all'>
                                        <div className="link_option_show_services option_select_">
                                            <p>Todos</p>
                                        </div>
                                    </NavLink>
                                    <NavLink className='link_add_service' to='publications'>
                                        <div className="link_option_show_services">
                                            <p>Publicados</p>
                                        </div>
                                    </NavLink>


                                    <NavLink className='link_add_service' to='saved'>
                                        <div className="link_option_show_services">
                                            <p>Borradores</p>
                                        </div>
                                    </NavLink>
                                </div>

                            </div>

                            <Link className='link_add_service' to='new-service'>
                                <Button value='Agregar nuevo servicio' />
                            </Link>
                        </section>

                        <section className='my_services_'>
                            <Outlet />
                        </section>

                    </DivShadow>


                </div>
            </main>
        </>
    )
}
