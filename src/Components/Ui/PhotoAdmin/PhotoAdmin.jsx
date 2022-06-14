import { DesignLetters } from 'Components/StyledComponets/DesignLetters'
import React from 'react'
import './PhotoAdmin.css'


export const PhotoAdmin = ({photoData}) => {
    const {name, color, userPicture} = photoData;
    const getCharaterName = (value) => {
        let character = value.substring(1,0).toUpperCase()
        return character
    }

  return (
    <div className='fieldSize3 center_img'> 
        {userPicture ? 
                <img className='admin_user_photo' src={userPicture} alt={userPicture} />
            :
            <DesignLetters color={color}>
                <p className='first_letter_name_user_admin'>{getCharaterName(name)}</p>
            </DesignLetters>
        }
    </div>
  )
}
