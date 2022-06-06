import React from 'react'
import './CardMessage.css'

export const CardMessage = ({ info, location, user }) => {
    const { messagess, usuario, fecha } = info
    return (
        <div className={`contaner_message ${usuario != user ? 'out' : 'in'}`} >
            <div className='card_message' >
                <p className="message_card">{messagess}</p>
                <div className="date_card">{fecha}</div>
                
            </div>
        </div>
    )
}
