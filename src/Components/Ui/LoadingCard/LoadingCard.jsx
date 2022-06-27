import React from 'react'
import './LoadingCard.css'

export const LoadingCard = () => {
    return (
        <div className='card_service loading_card'>
            <div className="animation_load"></div>
            <div className="animation_load slow"></div>
            <header className='header_card_service  header_load'>

            </header>
            <div className='body_card_service body_load'>
               
            </div>
        </div>
    )
}
