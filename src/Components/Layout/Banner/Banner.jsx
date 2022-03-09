import React from 'react'
import './Banner.css'

export const Banner = ({informaction, image}) => {
    return (
        <div className='banner'>
            <div className="informacion_banner">
                <div>
                <p className="title_informacion_banner">{informaction.title}</p>
                <p className="informacion_banner">{informaction.info}</p>    
                </div>
            </div>
            <img src={image} alt="" className="image_banner" />
        </div>      
    )
}
