import React, { useState } from "react"
import { Header } from "Components/Layout/Header/Header"
import { CardService } from 'Components/Ui/CardService/CardService'
import { Banner } from "Components/Layout/Banner/Banner"
import { DivShadow } from "Components/StyleComponets/DivShadow"
import { SerchEngine } from "Components/Layout/SearchEngine/SearchEngine"
import { DivPopUp } from "Components/StyleComponets/DivPopUp"
import { Title } from "Components/StyleComponets/Titlte"
import { InputTextLabel } from "Components/Ui/InputTextLabel/InputTextLabel"
import { Button } from "Components/Ui/Button/Button"
import  IconAddImage  from 'Assets/Icons/IconAddImageWhite.png'
import { PhotoUserProfile } from "Components/Ui/PhotoUserProfile/PhotoUserProfile"

import './Index.css'

export const Index = () => {
    
    const [isOpen, setIsOpen] = useState(true)
    
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
            
            <DivPopUp isOpen={false} >
                <div className="center_popup_profile">
                    <DivShadow className='popup_profile'>
                        <div className="padding_info_user">

                            <Title className='title_form_my_profile'>Perfil</Title>
                            <form className='form_my_profile'>

                                <div className="padding_form_my_profile">                         
                                    <InputTextLabel titleLabel='Nombres' type='text' placeholder={profile.name}/>
                                    <InputTextLabel titleLabel='Apellidos' type='text' />
                                    <InputTextLabel titleLabel='Celular' type='number' />
                                    <InputTextLabel titleLabel='Correo' type='email' />
                                    <InputTextLabel titleLabel='Fecha de nacimiento' type='text' />
                                </div>
                                <div className="input_save_profile">
                                    <Button style='button_big' value='Guardar'/>
                                </div>
                            </form>                           
                        </div>

                        <div className="image_profile">
                            <input type="file" name="" id="input_file_image" />
                            <label htmlFor="input_file_image">
                                <div className="change_image_my_profile">
                                    <img className='icon_add_image' src={IconAddImage} alt="" />
                                    <p className='info_change_image'>Cambiar imagen de perfil</p>
                                </div>
                            </label>
                            <PhotoUserProfile infoProfile={profile} style='big_profile' small={false} />
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