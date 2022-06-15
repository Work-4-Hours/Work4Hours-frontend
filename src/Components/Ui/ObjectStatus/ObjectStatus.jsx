import React from 'react'
import './ObjectStatus.css'
import { BsX } from 'react-icons/bs';
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';

export const ObjectStatus = ({userSelect, closePopUpAndDeleteSelectedDeslectCheckBox}) => {
  const {email,id, fotoUser, nombres, color}=userSelect;
  const photoData={name:nombres, color:color, userPicture:fotoUser};
  
  return (
    <div className='object_status'>
      <PhotoAdmin photoData={photoData}/>
      <p>{email}</p>
      <BsX className='delete_user_status' onClick={()=>{closePopUpAndDeleteSelectedDeslectCheckBox(id)}}/>
    </div>
  )
}

