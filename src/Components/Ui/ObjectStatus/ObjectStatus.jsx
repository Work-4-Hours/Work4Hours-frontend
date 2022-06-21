import React from 'react'
import './ObjectStatus.css'
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';


export const ObjectStatus = ({userSelect, deletingSelectedDeslectCheckbox}) => {
  const {email,id, fotoUser, nombres, color}=userSelect;
  const photoData={name:nombres, color:color, userPicture:fotoUser};
  
  const prueba=(e)=>{
    console.log(e);
  }
  
  return (
    <div className='object_status'>
      <PhotoAdmin photoData={photoData}/>
      <p>{email}</p>
      <label>
        <input type="radio" className='cb_confirm_changes' name={id} onClick={()=>{deletingSelectedDeslectCheckbox(id)}}/>
        <span className='delete_user_status' >X</span>
      </label>
      <div onChange={(e)=>{prueba(e)}}>
      </div>
    </div>
  )
}

