import React from "react"
import './InputText.css'

export const InputText = ({ isValidate = true, message_error = '', input_style='input_default', ...props }) => {
    return (
        <>
            <input className={`${input_style} input_text ${!isValidate && 'input_not_validate'} `} {...props} />
            {!isValidate &&
            <p className='input_message_error'>{message_error}</p>
            }
        </>
    )
}