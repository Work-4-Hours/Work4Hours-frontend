import React from 'react'
import './Button.css'

<<<<<<< HEAD
export const Button = ({style='button', value = 'boton', ...props }) => {
=======
export const Button = ({value, ...props }) => {
>>>>>>> a15e1011c92e2370272c57b2c505640c20b577f5
    return (
        <button className={style} {...props} >{value}</button>
    )
}
