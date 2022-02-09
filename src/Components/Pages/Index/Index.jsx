import React from "react"
import { Header } from "../../Layout/Header/Header"
import { Button } from "../../Ui/Button/Button"
import './Index.css'

export const Index = () => {
    return (
        <>
            <section className="banner_index">
                <div className="title_banner">
                    <h1 className="title">Work 4 Hours</h1>
                </div>            
            </section>
            <Header />
            <section className="services">
                <h2 className="subtitle_services">Bienvenido</h2>
                <p className="paragrhap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque ipsam labore repellendus eius nobis quia neque </p>
            </section>  
        </>
    ) 
}