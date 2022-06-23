import React, { useContext, useState } from 'react'
import { UserContext } from 'Context/UserContext'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router';

export const useManageServices = () => {

    const { getJwt } = useContext(UserContext)
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const getServices = async () => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/getOwnServices/${jwt_decode(getJwt()).userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JSW ${getJwt()}`
            }
        })
            .then(response => response.json())
            .then(response => {
                setData(response[0]);
                console.log(response);
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
            .finally(() => setLoading(false))
    }


    const updateService = async (data) => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/updateService`, {
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
            .finally(() => { 
                setLoading(false) 
                navigate('/dashboard/publicated')
            })
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
                console.log('Delete service');
                setData(response);
                console.log(response);
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false))
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
