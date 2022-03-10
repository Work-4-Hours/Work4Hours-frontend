import React from "react"
import './InputSearch.css'

export const InputSearch = ({...props}) => {
    return (
        <input className='input_search' type="search" {...props} />
    )
}