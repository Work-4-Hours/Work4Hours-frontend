import React, { useContext, useEffect, useState } from "react"
import { Header } from "Components/Layout/Header/Header"
import { CardService } from 'Components/Ui/CardService/CardService'
import { Banner } from "Components/Layout/Banner/Banner"
import { DivShadow } from "Components/StyleComponets/DivShadow"
import { SerchEngine } from "Components/Layout/SearchEngine/SearchEngine"
import { Link } from "react-router-dom"
import { useFetch } from "CustomHooks/useFetch"
import { UserContext } from "Context/UserContext"
import axios from "axios"


import './Index.css'

export const Index = () => {
    const { isAuth } = useContext(UserContext)
    const [results, setResults] = useState([])
    const { loading, data } = useFetch('https://rickandmortyapi.com/api/character')
    
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

    const profile = {
        color: "#a11d1d",
        imageprofile: "",
        name: "Camilo Lopez",
        email: "carlos@gmail.com",
        phone: "3166529009",
        calification: 73.6
    }

    return (
        <>                    
            <Header />
            <SerchEngine/>
            <main>
                <div className="center_main_index">
                    <section className="banner_index">
                        <Banner informaction={informacionBanner} image={"https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png"} />               
                    </section>
                    <section className='services_index'>
                        <DivShadow className='container_pricipal_servieces'> 
                            <Link to='/infoservice' className='link_card_service'>
                                <CardService info={service} />
                                {
                                    loading ?
                                    <p>Cargando</p>
                                    :
                                    <>
                                    {
                                        results.map((item, index) =>  <p key={index}>{item.name}</p> )
                                    }
                                    </>
                                }
                            </Link>
                        </DivShadow>                 
                    </section>
                </div>
            </main>
        </>
    )
}