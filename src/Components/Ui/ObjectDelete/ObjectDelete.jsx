import React from 'react';

export const ObjectDelete = ({servicesSelect, closePopUpAndDeleteSelectedDeslectCheckBox}) => {
  const {id,nombre}=servicesSelect;

  return (
    <div className='object_status'>
      <p>{nombre}</p>
      <label>
        <input type="radio" className='cb_confirm_changes' name={id} onClick={()=>{closePopUpAndDeleteSelectedDeslectCheckBox(id)}}/>
        <span className='delete_user_status' >X</span>
      </label>
    </div>
  )
}