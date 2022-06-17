import React from 'react'
import { ReactComponent as IconLocation } from "Assets/Icons/IconLocation.svg"

import './CardService.css'

export const CardService = ({info}) => {
    const { price, photo, city_name, department_name, name } = info 

    function agregarSeparadorMiles(numero) {
        let partesNumero = numero.toString().split(',');
    
        partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
        return partesNumero.join(',');
    }
    
    return (
        <div className='card_service'>
            <header className='header_card_service'>
                <div className='price_header_card'>
                    <div className="information_price_service">
                        <p>COP ${ agregarSeparadorMiles(price)}/hora</p>                           
                    </div>
                </div>
                <img className='image_header_card' src={photo} alt="" />
            </header>
            <body className='body_card_service'>
                <div className="location_card_service">
                    <IconLocation className='icon_location_card_service'/>
                    <p className='location_body_card'>{city_name} • {department_name}</p>
                </div>
                <p className='title_body_card'>{name}</p>
            </body>
        </div>
    )
}
