import React from 'react'
import { ReactComponent as IconLocation } from "Assets/Icons/IconLocation.svg"

import './CardService.css'

export const CardService = ({info}) => {
    const {price, image, city, departament, title} = info 
    return (
        <div className='card_service'>
            <header className='header_card_service'>
                <div className='price_header_card'>
                    <div className="information_price_service">
                        <p>$</p>
                        <p>{price}</p>
                        <p>por hora</p>                             
                    </div>
                </div>
                <img className='image_header_card' src={image} alt="" />
            </header>
            <body className='body_card_service'>
                <div className="location_card_service">
                    <IconLocation className='icon_location_card_service'/>
                    <p className='location_body_card'>{city} • {departament}</p>
                </div>
                <p className='title_body_card'>{title} </p>
            </body>
        </div>
    )
}
