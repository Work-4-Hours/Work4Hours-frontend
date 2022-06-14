import React from 'react'
import { InputSelect } from '../InputSelect/InputSelect'
import './SelectTextLabel.css'

export const SelectTextLabel = ({titleLabel, nameSelect="Seleccione", options, disable, input_style, ...props}) => {

    return (
        <div>
            <p className={`title_label_input ${input_style && 'white_text'}`}>{titleLabel}</p>
            <InputSelect nameSelect={nameSelect} options={options} disabled={disable} input_style={input_style} {...props}  />
        </div>
    )
}