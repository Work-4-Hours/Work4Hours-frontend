import React from 'react'
import './Button.css'

export const Button = ({style='button', value = 'boton', ...props }) => {
    return (
        <button className={style} {...props} >{value}</button>
    )
}
