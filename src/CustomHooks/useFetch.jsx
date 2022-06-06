import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const useFetch = (url) => {
    const [isLoading, setisLoading] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setisLoading(true)
        axios.get(url)
        .then(response => {
            setData(response.data)
        })
        .catch(error => setError(error))          
        .finally(() => setisLoading(false))
    },[url])

    return {
        isLoading,
        data,
        error
    }
}
