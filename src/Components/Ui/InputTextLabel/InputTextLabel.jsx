import React from "react"
import { InputText } from "../InputText/InputText"
import './InputTextLabel.css'

export const InputTextLabel = ({titleLabel, isValidate, message_error, input_style, ...props}) => {
    return (
       <div>
           <p className={`title_label_input ${input_style && 'white_text'}`}>{titleLabel}</p>
           <InputText isValidate={isValidate} message_error={message_error} input_style={input_style} {...props} />
       </div>
    )
}