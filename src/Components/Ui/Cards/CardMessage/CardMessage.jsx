import React from 'react'
import './CardMessage.css'

export const CardMessage = ({ info, location, user }) => {
    const { messagess, usuario, fecha } = info

    const formatDateTime = (date_time) => {
        const date = new Date(date_time)
        var day = date.toLocaleDateString()
        var hours = date.getHours();
        var minutes = date.getMinutes();
        
        var newformat = hours >= 12 ? 'p. m.' : 'a. m.'; 
        
        hours = hours % 12; 
        
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0' + minutes : minutes;

        return `${day}   ${hours}:${minutes} ${newformat}` 
    }
    return (
        <div className={`contaner_message ${usuario != user ? 'out' : 'in'}`} >
            <div className='card_message' >
                <p className="message_card">{messagess}</p>
                <div className="date_card">{ formatDateTime(fecha)}</div>
                
            </div>
        </div>
    )
}
