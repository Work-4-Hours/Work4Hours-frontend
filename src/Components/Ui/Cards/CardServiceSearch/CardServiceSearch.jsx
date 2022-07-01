import React from 'react'
import { CalificationUser } from '../../CalificationUser/CalificationUser'

import './CardServiceSearch.css'

export const CardServiceSearch = ({ info_service }) => {
    const {price, photo, city_name, department_name, name, description} = info_service
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
                    <p className="price_service_search">CO{price}/hora</p>
                    <CalificationUser value={7} />
                </body>
            </div>
        </div>
    )
}
