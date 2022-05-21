import React from 'react'
import './ObjectStatus.css'
import { BsX } from 'react-icons/bs';
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';


export const ObjectStatus = ({userSelect, deleteUserSelect}) => {
  const {idEstado,email,idUsuario, fotoUser, nombres, color}=userSelect;
  const photoData={name:nombres, color:color, userPicture:fotoUser};
  console.log(userSelect)
  
  return (
    <div className='object_status'>
      <PhotoAdmin photoData={photoData}/>
      <p>{email}</p>
      <BsX className='delete_user_status' onClick={()=>{deleteUserSelect(idUsuario)}}/>
    </div>
  )
}

