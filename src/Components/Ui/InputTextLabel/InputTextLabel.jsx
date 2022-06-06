import React from "react"
import { InputText } from "../InputText/InputText"
import './InputTextLabel.css'

export const InputTextLabel = ({titleLabel, isValidate, message_error, ...props}) => {
    return (
       <div>
           <p className='title_label_input'>{titleLabel}</p>
           <InputText isValidate={isValidate} message_error={message_error} {...props} />
       </div>
    )
}