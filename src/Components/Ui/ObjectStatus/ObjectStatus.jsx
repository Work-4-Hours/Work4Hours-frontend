import React from 'react'
import './ObjectStatus.css'
import { BsX } from 'react-icons/bs';
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';

export const ObjectStatus = ({userSelect, dataObjectStatus}) => {
  const {email, id, fotoUser, nombres, color}=userSelect;
  const photoData={name:nombres, color:color, userPicture:fotoUser};
  const {deletingSelectedDeslectCheckbox,selectedList, isOpen, setIsOpen}=dataObjectStatus;
  
  const closePopUpAndDeleteSelectedDeslectCheckBox = () => {
    deletingSelectedDeslectCheckbox(id);
    if(selectedList.length===0){
      setIsOpen(!isOpen)
    } 
  }

  return (
    <div className='object_status'>
      <PhotoAdmin photoData={photoData}/>
      <p>{email}</p>
      <BsX className='delete_user_status' onClick={()=>{closePopUpAndDeleteSelectedDeslectCheckBox()}}/>
    </div>
  )
}

