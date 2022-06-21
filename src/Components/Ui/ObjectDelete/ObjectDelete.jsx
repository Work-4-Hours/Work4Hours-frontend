import React from 'react';
import { BsX } from 'react-icons/bs';

export const ObjectDelete = ({servicesSelect, deletingSelectedDeslectCheckbox}) => {
  const {id,nombre}=servicesSelect;
  return (
    <div className='object_status'>
      <p>{nombre}</p>
      <label>
        <input type="radio" className='cb_confirm_changes' name={id} onClick={()=>{deletingSelectedDeslectCheckbox(id)}}/>
        <span className='delete_user_status' >X</span>
      </label>
    </div>
  )
}