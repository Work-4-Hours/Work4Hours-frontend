import React from 'react'
import './Button.css'

export const Button = ({value, ...props }) => {
    return (
        <button className='button' {...props} >{value}</button>
    )
}
