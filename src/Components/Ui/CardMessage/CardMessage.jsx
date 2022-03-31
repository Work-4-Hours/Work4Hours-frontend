import React from 'react'
import './CardMessage.css'

export const CardMessage = ({ info, location, style='card_default' }) => {
    const { message, date } = info
    return (
        <div className={`contaner_message ${location}`} >
            <div className='card_message' >
                <div className="message_card">{message}</div>
                <div className="date_card">{date}</div>
            </div>
        </div>
    )
}
