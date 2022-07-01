import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { CalificationUser } from '../../CalificationUser/CalificationUser'

import './CardServiceSearch.css'

export const CardServiceSearch = ({ info_service }) => {
    const {price, photo, city_name, department_name, name, description, qualification} = info_service

    console.log(info_service);

    function agregarSeparadorMiles(numero) {
        let partesNumero = numero.toString().split(',');
    
        partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
        return partesNumero.join(',');
    }
    return (
        <div className="card_service_search">
            <div className="image_service_search">
                <img src={photo} alt="" />
            </div>
            <div className="info_service_search">
                <header className="header_service_search">
                    <p className="name_service_search">{name}</p>
                    <div className="location_service_search">{city_name} • {department_name}</div>
                </header>
                <body className="body_service_search">
                    <p className="price_service_search">COP {agregarSeparadorMiles(price)}/hora</p>
                    {/* <CalificationUser value={7} /> */}
                    <ReactStars
                                count={5}
                                size={30}
                                value={qualification}
                                activeColor="#14A2D6"
                                color="#e9e9e9"
                            />
                </body>
            </div>
        </div>
    )
}
