import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyledComponets/DivShadow'
import { CardService } from 'Components/Ui/Cards/CardService/CardService'
import { PhotoUserProfile } from 'Components/Ui/PhotoUserProfile/PhotoUserProfile'
import { ReactComponent as IconPhone } from 'Assets/Icons/IconPhone.svg'
import { ReactComponent as IconEmail } from 'Assets/Icons/IconEmail.svg'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from 'Context/UserContext'
import { CalificationUser } from 'Components/Ui/CalificationUser/CalificationUser'

import './Profile.css'
import { Link, useSearchParams } from 'react-router-dom'
import { LoadingCard } from 'Components/Ui/LoadingCard/LoadingCard'

export const Profile = () => {

    const {getJwt } = useContext(UserContext)
    const [services, setServices] = useState([])
    const [profileU, setProfileU] = useState([])
    const [params, setParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [qualification, setQualification] = useState(null)

    useEffect(() => {
        const getInfo = async () => {
            setLoading(true)
            fetch(`${process.env.REACT_APP_API_PRODUCTION}/getUserServices/${params.get('id')}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JSW ${getJwt()}`
                }
            })
                .then(response => response.json())
                .then(response => {
                    setServices(response[0]);
                    setProfileU(response[1]);
                    setQualification(response[2]);
                    console.log(response);
                })
                .finally(() => setLoading(false))

        }

        getInfo()

    }, [])

    const formatName = (name) => {
        return name.split(' ').join('-').toLowerCase()
    }

    const inputRef = useRef(null)

    const onFocus = () => {
        inputRef.current.focus()
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
                                    <PhotoUserProfile infoProfile={{ name: profileU.name, color: profileU.color, userPicture: profileU.photo }} style='medium_profile' small={false} />
                                </header>
                                <section className='info_user_profile'>
                                    <p className='name_user_profile'>{profileU.name} {profileU.lastName}</p>
                                    <p className='subtitle_user_profile'>Informacion</p>
                                    <div className="user_data_profile">
                                        <IconEmail className='icon_email' />
                                        <p className="email_user_profile">{profileU.email}</p>
                                    </div>
                                    <div className="user_data_profile">
                                        <IconPhone className='icon_phone' />
                                        <p className="phone_user_profile">{profileU.phoneNumber}</p>
                                    </div>
                                </section>
                            </DivShadow>
                            <DivShadow>
                                <div className="padding_calification_user_profile">
                                    <p className="subtitle_user_profile">Calificacion</p>
                                    <div className="calification_user_profile">
                                        <CalificationUser value={qualification?.qualification} />
                                        <p className='value_calification_user'>{qualification?.qualification}%</p>
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
                                                <LoadingCard />
                                                <LoadingCard />
                                            </>
                                            :

                                            services?.map((item, index) => <Link key={index} to={`/CO/service/${formatName(item.name)}?sid=${item.id}`} className='link_card_service'><CardService info={item} /></Link>)
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
