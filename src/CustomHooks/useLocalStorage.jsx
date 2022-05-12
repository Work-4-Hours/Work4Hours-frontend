import React, { useState } from 'react'

export const useLocalStorage = (key, initialvalue) => {
    const [storedValue, setStoredValue] = useState( () => {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialvalue
        }
    )

    const setLocalStorage = (value) => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setLocalStorage]
}
