import React from 'react'
import { InputSelect } from '../InputSelect/InputSelect'
import './SelectTextLabel.css'

export const SelectTextLabel = ({titleLabel, nameSelect="Seleccione", options , disable, ...props}) => {

    return (
        <div>
            <p className='title_label_input'>{titleLabel}</p>
            <InputSelect nameSelect={nameSelect} options={options} disabled={disable} {...props}  />
        </div>
    )
}