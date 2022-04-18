import React from 'react'
import './CardMessage.css'

export const CardMessage = ({ info, location, user }) => {
    const { message, name, date } = info
    return (
        <div className={`contaner_message ${name != user ? 'out' : 'in'}`} >
            <div className='card_message' >
                <div className="message_card">{message}</div>
                <div className="date_card">{date}</div>
            </div>
        </div>
    )
}
