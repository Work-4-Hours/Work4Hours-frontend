import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { PhotoUserProfile } from 'Components/Ui/PhotoUserProfile/PhotoUserProfile'
import React from 'react'

import './InfoService.css'

export const InfoService = () => {
    const profile = {
        color: "#a11d1d",
        imageprofile: "",
        name: "Alverto Culoabierto",
        email: "carlos@gmail.com",
        phone: "3166529009",
        calification: 73.6
    }
    return (
        <>
            <Header/>
            <main className='main_info_service'>
                <div className="center_info_service">
                    <DivShadow>
                        <div className="padding_info_servie">
                            <header className="header_info_service">

                            </header>
                            <div className="user_profile">
                                <PhotoUserProfile infoProfile={profile} style='small_profile' small={true} />
                                <p>{profile.name}</p>
                            </div>
                        </div>
                    </DivShadow>
                    <DivShadow>

                    </DivShadow>
                </div>
            </main>
     
        </>
    )
}