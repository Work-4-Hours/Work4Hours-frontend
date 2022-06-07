import React, { useEffect, useRef } from 'react'
import './InputSelect.css'

export const InputSelect = ({nameSelect, options, disabled, input_style,...props}) => {
    const chatRef = useRef()

    useEffect(() => {
        disabled ? 
        chatRef.current.setAttribute('disabled','') 
        :
        chatRef.current.removeAttribute('disabled')
    },[disabled])

    return (
        <select className={`select_input ${input_style}`} ref={chatRef} {...props} >
            <option value="">{nameSelect}</option>
            {
                options?.map((item,index) => (
                    <option key={index} value={item.id}>{item.name}</option>
                ))
            }
        </select>
    )
}