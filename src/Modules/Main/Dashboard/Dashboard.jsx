import { Header } from 'Components/Layout/Header/Header'
import { DivShadowDark } from 'Components/StyleComponets/DivShadowDark'
import { Title } from 'Components/StyleComponets/Titlte'
import { Button } from 'Components/Ui/Button/Button'
import { LinkOption } from 'Components/Ui/LinkOption/LinkOption'
import { Link, Outlet, useParams } from 'react-router-dom'
import React, { useContext } from 'react'

import './Dashboard.css'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { UserContext } from 'Context/UserContext'

export const Dashboard = () => {

    const { user } = useContext(UserContext)

    return (
        <>
        <Header/>
            <main className='main_dasboard'>
                <div className="center_dashboard">

                    <DivShadowDark className='personal_info'>
                        <div className="image_profile_dashboard">
                            <img className='image_my_profile' src={user.info[0].userPicture} alt="" />

                            <p>{user.info[0].names}</p>
                            <p>XD</p>
                        </div>

                    </DivShadowDark>

                    <DivShadowDark className='main_dashboard_'>
                        {/* <Link to="/"><img className="logo_app_dashboard" src="https://res.cloudinary.com/sena-quindio/image/upload/v1646884944/qqdviu6wbgeum4hpp5m6.png" alt="" /></Link> */}
                        <p className='title_dashboard_info_small'>Panel</p>
                        <p className='title_dashboard_info'>Administrar servicios</p>

                        <section className='nav_show_services'>

                            <div className="options_show_my_services">
                                <p className='show_only_title'>Mostrar solo:</p>
                                <div className="options_show_">
                                    <div className="link_option_show_services option_select_">
                                        <p>Todos</p>
                                    </div>

                                    <Link className='link_add_service' to='publications'>
                                        <div className="link_option_show_services">
                                            <p>Publicados</p>
                                        </div>
                                    </Link>


                                    <Link className='link_add_service' to='saved'>
                                        <div className="link_option_show_services">
                                            <p>Borradores</p>
                                        </div>
                                    </Link>
                                </div>

                            </div>

                            <Link className='link_add_service' to='new-service'>
                                <Button value='Agregar nuevo servicio' />
                            </Link>
                        </section>

                        <section className='my_services_'>
                            <Outlet />
                        </section>

                    </DivShadowDark>


                </div>
            </main>
        </>
    )
}
