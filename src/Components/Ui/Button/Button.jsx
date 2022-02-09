import React from 'react'
import './Button.css'

export const Button = ({value = 'boton', ...props }) => {
    return (
        <button className='button' {...props} >{value}</button>
    )
}
