import React, { useContext, useEffect, useState } from "react"
import { Header } from "Components/Layout/Header/Header"
import { CardService } from 'Components/Ui/Cards/CardService/CardService'
import { Banner } from "Components/Layout/Banner/Banner"
import { DivShadow } from "Components/StyledComponets/DivShadow"
import { SerchEngine } from "Components/Layout/SearchEngine/SearchEngine"
import { Link, useNavigate, useNavigationType } from "react-router-dom"
import { UserContext } from "Context/UserContext"
import { LoadingCard } from "Components/Ui/LoadingCard/LoadingCard"
import jwt_decode from "jwt-decode";

import { useFetch } from "CustomHooks/useFetch"
import { Button } from "Components/Ui/Button/Button"
import { Slide, Slideshow, TextoSlide } from "Components/Layout/SlidesShow/Slideshow"
import { BannerSlideShow } from "Components/Layout/BannerSlideShow/BannerSlideShow"
import { CardInterest } from "Components/Ui/Cards/CardInterest/CardInterest"
import { Footer } from "Components/Layout/Footer/Footer"
import './Index.css'

export const Index = () => {

    const { isLoading, data } = useFetch(`${process.env.REACT_APP_API_PRODUCTION}`)

    const { user, isAuth } = useContext(UserContext)

    const navigate = useNavigate();

    const [banners, setBanners] = useState([
        { title: 'Work 4 Hours', image: "https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png", information: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, vero' },
        {
            title: 'Work 4 Hours', image: "https://thumbs.dreamstime.com/b/man-dog-gardening-work-working-garden-55783074.jpg", information: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, earum in? Natus deserunt doloribus qui.'
        }]);

    const formatName = (name) => {
        return name.split(' ').join('-').toLowerCase()
    }

    return (
        <>
            {/* https://workforhours-api.somee.com */}
            <Header />
            <SerchEngine />
            <main>
                <div className="center_main_index">
                    <section className="banner_index">
                        {/* <Banner informaction={{ title: "Services", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }} image={"https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png"} /> */}
                        <Banner banners={banners} />
                        {/* <BannerSlideShow banners={banners} /> */}
                    </section>
                    <p className="title_index">Más relevantes</p>

                    <section className='services_index'>
                        <DivShadow className='container_pricipal_servieces'>
                            {
                                isLoading ?
                                    <>
                                        <LoadingCard />
                                        <LoadingCard />
                                        <LoadingCard />
                                        <LoadingCard />
                                        <LoadingCard />
                                        <LoadingCard />
                                        <LoadingCard />
                                        <LoadingCard />
                                        <LoadingCard />
                                        <LoadingCard />
                                    </>
                                    :
                                    data?.map((item, index) => (
                                        <Link key={index} to={`CO/service/${formatName(item.name)}?sid=${item.id}`} className='link_card_service'>
                                            <CardService info={item} />
                                        </Link>
                                    ))
                            }
                        </DivShadow>
                    </section>
                </div>

                <section className='information_services'>
                    <div className="center_section_information_services">
                        <p className="title_index">Temas que pueden interesarte</p>

                        <div className="section_interest_card">
                            <CardInterest information={{ subtitle: "Jardineria", title: "Encuentra servicios de jardineria", image: "https://media.istockphoto.com/photos/gardener-at-gardening-picture-id612495778?k=20&m=612495778&s=612x612&w=0&h=Idt0FXrg6roz8QFLjIfgk9xu8jnkP1MDnbOdMEc6N4Q=" }} />
                            <CardInterest information={{ subtitle: "Reparaciones", title: "Encuentra servicios sobre reparación", image: "https://img.freepik.com/free-photo/close-up-hands-auto-mechanic-using-wrench-maintenance-car-engine_101448-2833.jpg?w=2000" }} />
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}