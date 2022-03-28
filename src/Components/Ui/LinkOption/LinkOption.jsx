import React from 'react'
import { Link } from 'react-router-dom'

import './LinkOption.css'

export const LinkOption = ({link = '', text = 'Link', ...props}) => {
    return (
        <div className="container_link_option">
            <Link className='link_option' {...props} to={link} >
                <p className='text_link_option'>{text}</p>
            </Link>
        </div>  
    )
}
