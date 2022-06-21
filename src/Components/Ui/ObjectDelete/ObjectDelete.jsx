import React from 'react';

export const ObjectDelete = ({servicesSelect, dataObjectDelete}) => {
  const {id,nombre}=servicesSelect;
  const {deletingSelectedDeslectCheckbox,selectedList, isOpen, setIsOpen}=dataObjectDelete;

  const closePopUpAndDeleteSelectedDeslectCheckBox = () => {
    deletingSelectedDeslectCheckbox(id);
    if(selectedList.length===0){
      setIsOpen(!isOpen)
    }
  }

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