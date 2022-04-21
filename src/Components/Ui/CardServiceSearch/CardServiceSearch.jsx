import React from 'react'
import { CalificationUser } from '../CalificationUser/CalificationUser'

import './CardServiceSearch.css'

export const CardServiceSearch = ({ info_service }) => {
    const {price, photo, city, departament, name} = info_service
    return (
        <div className="card_service_search">
            <div className="image_service_search">
                <img src="https://res.cloudinary.com/sena-quindio/image/upload/v1650504672/gob17e9gehwee4w3lcj8.png" alt="" />
            </div>
            <div className="info_service_search">
                <header className="header_service_search">
                    <p className="name_service_search">{name}</p>
                    <div className="location_service_search">{city} {departament}</div>
                </header>
                <body className="body_service_search">
                    <p className="price_service_search">$ {price} por hora</p>
                    <CalificationUser value={70} />
                </body>
            </div>
        </div>
    )
}
