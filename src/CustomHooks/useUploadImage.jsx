import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export const useUploadImage = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');
    const [error, setError] = useState(null);

    const uploadImage = async (file) => {
        setLoading(true)
        const form_data = new FormData()
        form_data.append('upload_preset', 'services')
        form_data.append('file', file)
        await Axios.post('https://api.cloudinary.com/v1_1/sena-quindio/image/upload', form_data)
            .then(response => {
                setData(response.data.url)
                console.log(response);
            })
            .catch(setError)
            .finally(() => {
                setLoading(false)
            })
    }

 
    return {
        loading,
        data,
        setData,
        error,
        uploadImage,
        setLoading
    }
}