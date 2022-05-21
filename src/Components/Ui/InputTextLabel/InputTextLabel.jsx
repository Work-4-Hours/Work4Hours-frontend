import React from "react"
import { InputText } from "../InputText/InputText"
import './InputTextLabel.css'

export const InputTextLabel = ({titleLabel, isValidate, error_message, ...props}) => {
    return (
       <div>
           <p className='title_label_input'>{titleLabel}</p>
           <InputText isValidate={isValidate} error_message={error_message} {...props} />
       </div>
    )
}