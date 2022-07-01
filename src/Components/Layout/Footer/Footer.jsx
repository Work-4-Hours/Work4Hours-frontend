import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as IconFacebook } from 'Assets/Icons/IconFacebook.svg'
import { ReactComponent as IconInstagram } from 'Assets/Icons/IconInstagram.svg'

import './Footer.css'

export const Footer = () => {
    const now = new Date()
    return (
        <footer className='footer_app'>
            <div className="center_footer_app">

                <div className="info_aplication">

                    <div className="section_information_aplicaction">
                        <Link to="/"><img className="footer_logo" src="https://res.cloudinary.com/sena-quindio/image/upload/v1656131213/work4hours/ipz0z1xedpgv9vcedtvs.png" alt="" /></Link>
                    </div>

                    <div className="social_networks">
                        <a href='https://web.facebook.com/Work-4-Hours-101901409252603/?_rdc=1&_rdr' target="_blank"><IconFacebook className='icon_footer' /></a>
                        <a href='https://www.instagram.com/work_4_hours/' target="_blank"><IconInstagram className='icon_footer' /></a>
                    </div>


                </div>

                <div className="footer_information">
                    <Link to='' className='link_terminos_condiciones'>Terminos y condiciones</Link>
                    <p className='information_copy'>Copyrigth © 2022, Todos los derechos reservados Work 4 Hours</p>
                </div>

                <div className="principal_info_footer">
                    <div className="contact">
                        <p className='subtitle_footer'>Contacto</p>
                        <p className='paragraph_footer'>work4hours@hotmail.com</p>
                    </div>
                    <div className="about_footer">
                        <p className='subtitle_footer'>Acerca de</p>
                        <p className='paragraph_footer'>Somos un equipo de desarrolladores y aprendices sena apasionados por el software</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}
