import React from 'react'
import './ObjectStatus.css'
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';

export const ObjectStatus = ({userSelect, dataObject}) => {
  const {email, id, photo, name, color}=userSelect;
  const photoData={name:name, color:color, userPicture:photo};
  const {closePopUpAndDeleteSelectedDeslectCheckBox, selectedList, setSelectedList, setRemoveCheckbox}=dataObject

  return (
    <div className='object_status'>
      <PhotoAdmin photoData={photoData}/>
      <p>{email}</p>
      <label>
        <input type="radio" className='cb_confirm_changes' name={id} onClick={()=>{closePopUpAndDeleteSelectedDeslectCheckBox(id, selectedList, setSelectedList,); setRemoveCheckbox({id:id,status:false})}}/>
        <span className='delete_user_status'>X</span>
      </label>
    </div>
  )
}