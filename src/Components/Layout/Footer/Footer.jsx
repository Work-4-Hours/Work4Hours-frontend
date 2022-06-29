import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
    return (
        <footer className='footer_app'>
            <div className="center_footer_app">
                <Link to="/"><img className="footer_logo" src="https://res.cloudinary.com/sena-quindio/image/upload/v1656131213/work4hours/ipz0z1xedpgv9vcedtvs.png" alt="" /></Link>
                <div className="footer_information">
                    <p></p>
                </div>
            </div>
        </footer>
    )
}
