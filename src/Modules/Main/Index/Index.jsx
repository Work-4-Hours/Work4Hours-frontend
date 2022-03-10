import React from "react"
import { Header } from "Components/Layout/Header/Header"
import { CardService } from 'Components/Ui/CardService/CardService'
import { Banner } from "Components/Layout/Banner/Banner"
import { DivShadow } from "Components/StyleComponets/DivShadow"

import './Index.css'

export const Index = () => {
    const service = {
        price: "200.000",
        image: "https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png",
        city: "Armenia",
        departament: "Quindio",
        title: "Instalacion de tejados"
    }

    const informacionBanner = {
        title: "Services",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    }
    return (
        <>
            <Header />
            <main>
                <div className="center_main_index">
                    <section className="banner_index">
                        <Banner informaction={informacionBanner} image={"https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png"} />               
                    </section>
                    <section className='services_index'>
                        <DivShadow className=''>
                            <CardService info={service} />
                        </DivShadow>                 
                    </section>
                </div>
            </main>
        </>
    )
}