import React from 'react'
import './CardMessage.css'

export const CardMessage = ({ info, location, user }) => {
    const { messagess, usuario, fecha } = info
    var d = new Date("2015-03-25T12:00:00");
    console.log(d);
    return (
        <div className={`contaner_message ${usuario != user ? 'out' : 'in'}`} >
            <div className='card_message' >
                <p className="message_card">{messagess}</p>
                <div className="date_card">{ fecha}</div>
                
            </div>
        </div>
    )
}
