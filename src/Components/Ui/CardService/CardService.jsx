import React from 'react'
import './CardService.css'

export const CardService = ({info}) => {
    const {price, image, city, departament, title} = info 
    return (
        <div className='card_service'>
            <header className='header_card_service'>
                <div className='price_header_card'>
                    <p className='price_card'>$ {price} por hora</p>              
                </div>
                <img className='image_header_card' src={image} alt="" />
            </header>
            <body className='body_card_service'>
                <p className='location_body_card'>{city} • {departament}</p>
                <p className='title_body_card'>{title}</p>
            </body>
        </div>
    )
}
