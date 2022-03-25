import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { PopUp } from 'Components/StyleComponets/PopUp'
import { PhotoUserProfile } from 'Components/Ui/PhotoUserProfile/PhotoUserProfile'
import { ReactComponent as IconFlag } from 'Assets/Icons/IconFlag.svg'

import React, { useState } from 'react'

import './InfoService.css'
import { Link } from 'react-router-dom'

export const InfoService = () => {

    const [isOpen, setIsOpen] = useState(false)
    const profile = {
        color: "#a11d1d",
        imageprofile: "",
        name: "Alverto Culoabierto",
        email: "carlos@gmail.com",
        phone: "3166529009",
        calification: 73.6
    }

    const service = {
        price: "200.000",
        type: "Oferta",
        image: "https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png",
        city: "Armenia",
        departament: "Quindio",
        title: "Pinto casas a domicilio Lorem"
    }

    return (
        <>
            <Header/>
            <main className='main_info_service'>
                <div className="center_info_service">
                    <DivShadow>
                        <div className="padding_info_servie">
                            <header className="header_info_service">
                                <p className='tipe_info_service'>{service.type}</p>
                                <div className='btn_report' onClick={e=>setIsOpen(!isOpen)}>
                                    <p className='report'>Reportar</p>
                                    <IconFlag className='icon_flag' />
                                </div>
                                <PopUp className='popup_report' isOpen={isOpen} bg='#FFFF'>
                                    <div className="padding_popup_report">    
                                        <p>Seleccione un motivo</p>
                                        <div className="options_report">
                                            <Link to=''>Abuso</Link>
                                            <Link to=''>Contenido indevido</Link>
                                            <Link to=''>Contenido ofensivo</Link>
                                        </div>
                                    </div>    
                                </PopUp>
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