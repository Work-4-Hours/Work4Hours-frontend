import { DesignLetters } from 'Components/StyleComponets/DesignLetters'
import React from 'react'


export const PhotoAdmin = ({photoData}) => {
    const getCharaterName = (value) => {
        const character = value.substring(1,0).toUpperCase()
        return character
    }
    const {name, color, userPicture} = photoData

  return (
    <div className='fieldSize3 center_img'> 
        {userPicture ? 
                <img className='admin_user_photo' src={userPicture} alt={userPicture} />
            :
            <DesignLetters color={color}>
                <h1 >{getCharaterName(name)}</h1>
            </DesignLetters>    
                
               
        }
    </div>
  )
}
