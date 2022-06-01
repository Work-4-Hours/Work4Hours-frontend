import React, { useContext, useEffect, useState } from "react"
import { Header } from "Components/Layout/Header/Header"
import { CardService } from 'Components/Ui/Cards/CardService/CardService'
import { Banner } from "Components/Layout/Banner/Banner"
import { DivShadow } from "Components/StyleComponets/DivShadow"
import { SerchEngine } from "Components/Layout/SearchEngine/SearchEngine"
import { Link } from "react-router-dom"
import { UserContext } from "Context/UserContext"
import { LoadingCard } from "Components/Ui/LoadingCard/LoadingCard"

import './Index.css'
import { useFetch } from "CustomHooks/useFetch"
import { Button } from "Components/Ui/Button/Button"

export const Index = () => {

    const { isLoading, data } = useFetch(`${process.env.REACT_APP_API_PRODUCTION}`)

    const formatName = (name) => {
        return name.split(' ').join('-').toLowerCase()
    }

    return (
        <>
            <Header />
            <SerchEngine />
            <main>
                <div className="center_main_index">
                    <section className="banner_index">
                        <Banner informaction={{ title: "Services", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }} image={"https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png"} />
                    </section>
                    <p className="title_index">Mejor calificados</p>

                    <section className='services_index'>
                        <DivShadow className='container_pricipal_servieces'>
                            {
                                isLoading ?
                                    <>
                                        <LoadingCard />
                                        <LoadingCard />
                                    </>
                                    :
                                    data?.map((item, index) => <Link key={index} to={`/${formatName(item.name)}?sid=${item.id}`} className='link_card_service'><CardService info={item} /></Link>)
                            }
                        </DivShadow>
                    </section>
                          
                    <p className="title_index">Temas que pueden interezarte</p>
                    <section className='information_services'>
                        <Banner informaction={{ title: "Jardineria", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere.  " }} image={"https://thumbs.dreamstime.com/b/man-dog-gardening-work-working-garden-55783074.jpg"} >                         
                            <Button value='Ver mas'/>
                        </Banner>

                        <Banner informaction={{ title: "Fontaneria", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }} image={"https://lmingecon.com/wp-content/uploads/2017/08/fontaneria-reformas-albacete.jpg"} >
                            <Button value='Ver mas'/>
                        </Banner>
                    </section>
                </div>
            </main>
        </>
    )
}