import React, { useEffect, useState } from 'react'

export const useField = ({ type = 'text', initial_value, validate = /^/, message_errors = 'Campo incorrecto' }) => {

    const [value, setValue] = useState(initial_value)
    const [message_error, setMessageError] = useState(null)
    const [isValidate, setIsValidate] = useState(true)

    const onChange = e => {
        setValue(e.target.value)
        setIsValidate(validate.test(e.target.value))
        setMessageError(message_errors)
        if (!e.target.value) {
            setMessageError('Campo requerido')
            setIsValidate(false)
        }
    }

    const validator = (value) => {
        if (value && validate.test(value)) 
            return true
        else {
            setMessageError('Campo requerido')
            setIsValidate(false)
            return false
        }
    }

    return {
        type,
        value,
        onChange,
        isValidate,
        message_error,
        setIsValidate,
        setMessageError,
        validator
    }
}
