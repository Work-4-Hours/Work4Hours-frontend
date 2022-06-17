import React from 'react';
import { BsX } from 'react-icons/bs';

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
      <BsX className='delete_user_status' onClick={()=>{closePopUpAndDeleteSelectedDeslectCheckBox(id)}}/>
    </div>
  )
}