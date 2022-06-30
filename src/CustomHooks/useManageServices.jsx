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

    const getAllServices = async () => {
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

    const getPublicatedServices = async () => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/getOwnServices/${jwt_decode(getJwt()).userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JSW ${getJwt()}`
            }
        })
            .then(response => response.json())
            .then(response => {
                const oublicated_services = response[0].filter(item => {
                    return item.status == 1                 
                })
                setData(oublicated_services);
                
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }

    const getOcultedServices = async () => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/getOwnServices/${jwt_decode(getJwt()).userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JSW ${getJwt()}`
            }
        })
            .then(response => response.json())
            .then(response => {
                const oculted_services = response[0].filter(item => {
                    return item.status == 3                 
                })
                setData(oculted_services);
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
                navigate('/dashboard/all')
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
        getAllServices,
        getPublicatedServices,
        getOcultedServices,
        
        createService,
        updateService,
        deleteService,
    }
}
