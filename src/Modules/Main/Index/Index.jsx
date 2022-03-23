import React from "react"
import { Header } from "Components/Layout/Header/Header"
import { CardService } from 'Components/Ui/CardService/CardService'
import { Banner } from "Components/Layout/Banner/Banner"
import { DivShadow } from "Components/StyleComponets/DivShadow"
import { SerchEngine } from "Components/Layout/SearchEngine/SearchEngine"

import './Index.css'
import { DivPopUp } from "Components/StyleComponets/DivPopUp"
import { Title } from "Components/StyleComponets/Titlte"

export const Index = () => {
    const service = {
        price: "200.000",
        image: "https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png",
        city: "Armenia",
        departament: "Quindio",
        title: "Pinto casas a domicilio Lorem"
    }

    const informacionBanner = {
        title: "Services",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    }

    return (
        <>
            
            <DivPopUp isOpen={true}>
                <div className="center_popup_profile">
                    <DivShadow className='popup_profile'>
                        <div className="padding_info_user">
                            <Title>Perfil</Title>
                        </div>
                        <div className="image_profile">
                            xd
                        </div>
                    </DivShadow>
                </div>
            </DivPopUp>

            <Header />
            <SerchEngine/>
            <main>
                <div className="center_main_index">
                    <section className="banner_index">
                        <Banner informaction={informacionBanner} image={"https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png"} />               
                    </section>
                    <section className='services_index'>
                        <DivShadow className='container_pricipal_servieces'> 
                            <CardService info={service} />
                        </DivShadow>                 
                    </section>
                </div>
            </main>
        </>
    )
}