import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export const useFetch = (url_default = null) => {
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(()=> {
        setLoading(true)
        Axios.get(url_default)
        .then(response => setData(response.data))
        .catch(setError)          
        .finally(() => setLoading(false))
    },[])

    
    

    return {
        data,
        loading,
        error
    }
}
