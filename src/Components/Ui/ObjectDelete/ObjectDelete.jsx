import React from 'react';
import { BsX } from 'react-icons/bs';

export const ObjectDelete = ({servicesSelect, deletingSelectedDeslectCheckbox}) => {
  const {id,nombre}=servicesSelect;
  return (
    <div className='object_status'>
      <p>{nombre}</p>
      <BsX className='delete_user_status' onClick={()=>{deletingSelectedDeslectCheckbox(id)}}/>
    </div>
  )
}