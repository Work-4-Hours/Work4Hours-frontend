import React from 'react'
import { BsX } from 'react-icons/bs';

export const ObjectStatus = ({userSelect, deleteUserSelect}) => {
  const {idEstado,email,idUsuario, fotoUser}=userSelect;
  return (
    <div className='object_status'>
      <img className='img_layout_status' src={fotoUser} alt={idUsuario}/>
      <p>{email}</p>
      <BsX className='delete_user_status' onClick={()=>{deleteUserSelect(idUsuario)}}/>
    </div>
  )
}

