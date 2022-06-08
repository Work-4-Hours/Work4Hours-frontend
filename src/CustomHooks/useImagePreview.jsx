import React, { useState } from 'react'

export const useImagePreview = () => {

    const [previewImage, setPreviewImages] = useState('')

    const setPreviewImage = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2)
                setPreviewImages(reader.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const setSatePreviewImage = (image) => {
        setPreviewImages(image)
    }   

    return {
        previewImage,
        setPreviewImage,
        setPreviewImages
    }
}
