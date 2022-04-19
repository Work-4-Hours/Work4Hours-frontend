import React, { useEffect, useState } from 'react'

export const useInitFetch = ({ url }) => {
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const get = async () => {
        setLoading(true)
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response.json())
        .then(user => setData(user))
        .finally(() => setLoading(false))
        }
    }, [])


return {
    data,
    loading,
    error
}
}
