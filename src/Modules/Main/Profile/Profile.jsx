import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { CardService } from 'Components/Ui/CardService/CardService'
import { PhotoUserProfile } from 'Components/Ui/PhotoUserProfile/PhotoUserProfile'
import { ReactComponent as IconPhone } from 'Assets/Icons/IconPhone.svg'
import { ReactComponent as IconEmail } from 'Assets/Icons/IconEmail.svg'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from 'Context/UserContext'
import { CalificationUser } from 'Components/Ui/CalificationUser/CalificationUser'

import './Profile.css'
import { Link } from 'react-router-dom'
import { LoadingCard } from 'Components/Ui/LoadingCard/LoadingCard'

export const Profile = () => {

    const { isAuth, getJwt } = useContext(UserContext)
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        const XD = async () => {
            setLoading(true)
            fetch(`${process.env.REACT_APP_API}/getUserServices/${37}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JSW ${getJwt()}`
                }
            })
            .then(response => response.json())
            .then(response => {
                setServices(response);
            })
            .finally(() => setLoading(false))
        }

        XD()

    },[])

    const info_user = {
        profile: {
            color: "#2736bb",
            imageprofile: "",
            name: "Carlos Alverto",
            email: "carlos@gmail.com",
            phone: "3166529009",
            calification: 30
        },
        
        services: [
            {
                price: "200.000",
                image: "https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png",
                city: "Armenia",
                departament: "Quindio",
                title: "Pinto casas a domicilio Lorem"
            }
        ]
    }

    const profileU = info_user.profile
    const servicesU = info_user.services
    const formatName = (name)=> {
        return  name.split(' ').join('-').toLowerCase()
    }      
    return (
        <>
            <Header />
            <main className='main_profile'>
                <div className="center_main_profile">

                    <aside className='informacion_user'>
                        <div className="sticky_informacion_user">
                            <DivShadow>
                                <header className='photo_user_profile'>
                                    <PhotoUserProfile infoProfile={profileU} style='medium_profile' small={false}/>
                                </header>
                                <section className='info_user_profile'>
                                    <p className='name_user_profile'>{profileU.name}</p>
                                    <p className='subtitle_user_profile'>Informacion</p>
                                    <div className="user_data_profile">
                                        <IconEmail className='icon_email' />
                                        <p className="email_user_profile">{profileU.email}</p>
                                    </div>
                                    <div className="user_data_profile">
                                        <IconPhone className='icon_phone' />
                                        <p className="phone_user_profile">{profileU.phone}</p>
                                    </div>
                                </section>
                            </DivShadow>
                            <DivShadow>
                                <div className="padding_calification_user_profile">
                                    <p className="subtitle_user_profile">Calificacion</p>
                                    <div className="calification_user_profile">
                                        <CalificationUser value={profileU.calification}/>
                                        <p className='value_calification_user'>{profileU.calification}%</p>
                                    </div>
                                </div>
                            </DivShadow>
                        </div>
                    </aside>

                    <section className='services_user'>
                        <DivShadow>
                            <div className="padding_publications_profile">
                                <h1 className='subtilte_publications_user'>Publicaciones</h1>
                                <div className="publications_user_profile">

                                {
                                    loading ?   
                                    <>
                                        <LoadingCard/>
                                        <LoadingCard/>
                                    </>                          
                                    :
                                    
                                    services?.map((item, index) =>  <Link key={index} to={`/${formatName(item.name)}?sid=${item.id}`} className='link_card_service'><CardService info={item} /></Link>)
                                }   

                                </div>
                            </div>
                        </DivShadow>
                    </section>
                </div>
            </main>
        </>
    )
}
