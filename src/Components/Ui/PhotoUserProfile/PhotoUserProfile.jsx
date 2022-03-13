import { DefaultProfile } from 'Components/StyleComponets/DefaultProfile'
import React from 'react'

import './PhotoUserProfile.css'

export const PhotoUserProfile = ({ infoProfile }) => {
    const getCharaterName = (value) => {
        const character = value.substring(1,0).toUpperCase()
        return character
    }
    const {name,color, imageprofile} = infoProfile
    return (
        <>
            {
                imageprofile ? 

                <div className="image_profile_user_">
                    <img className='image_user_' src={imageprofile} alt="" />
                </div>
                :
                <DefaultProfile color={color}>
                    <h1 className='first_letter_name_user'>{getCharaterName(name)}</h1>
                </DefaultProfile>
            }
        </>
    )
}
