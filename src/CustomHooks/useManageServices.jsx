import React, { useContext, useState } from 'react'
import { UserContext } from 'Context/UserContext'
import jwt_decode from "jwt-decode";

export const useManageServices = () => {

    const { getJwt } = useContext(UserContext)
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const getServices = async () => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/getUserServices/${jwt_decode(getJwt()).userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JSW ${getJwt()}`
            }
        })
            .then(response => response.json())
            .then(response => {
                setData(response[0]);
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }


    const createService = async (data) => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/serviceRegistry`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWS ${getJwt()}`
            },
            body: JSON.stringify({
                ...data,
                user: parseInt(jwt_decode(getJwt()).userId)
            })

        })
            .then(response => response.json())
            .then(response => {
                setData(response);
            })
            .catch(error => setError(error))
            .finally(setLoading(false))
    }


    const updateService = async (data) => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API}/updateService`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWS ${getJwt()}`
            },
            body: JSON.stringify({
                ...data
            })
        })
            .then(response => response.json())
            .then(response => {
                setData(response)
            })
            .catch(error => setError(error))
            .finally(setLoading(false))
    }

    const deleteService = async (id_service) => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/deleteService/${id_service}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JSW ${getJwt()}`
            }
        })
            .then(response => response.json())
            .then(response => {
                setData(response);
            })
            .catch(error => setError(error))
            .finally(setLoading(false))
    }

    return {
        data,
        loading,
        error,
        getServices,
        createService,
        updateService,
        deleteService,
    }
}
