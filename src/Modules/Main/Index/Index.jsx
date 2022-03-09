import React from "react"
import { Header } from "Components/Layout/Header/Header" 
import { Button } from "Components/Ui/Button/Button" 
import { CardService } from 'Components/Ui/CardService/CardService'
import './Index.css'
import { Banner } from "Components/Layout/Banner/Banner"

export const Index = () => {
    const service = {
        price: 200000,
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ver030119fieldtrip03-1615574226.jpg",
        city: "Armenia",
        departament: "Quindio",
        title: "Instalacion de tejados"
    }

    const informacionBanner = {
        title: "Services",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
    return (
        <>
        <Banner informaction={informacionBanner} image={"https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png"} />
         
        </>
    ) 
}