import React from 'react';

export const ObjectDelete = ({servicesSelect, dataDelete}) => {
  const {id,name}=servicesSelect;
  const {closePopUpAndDeleteSelectedDeslectCheckBox, selectedList, setSelectedList, setRemoveCheckbox}=dataDelete;
  return (
    <div className='object_status'>
      <p>{name}</p>
      <label>
        <input type="radio" className='cb_confirm_changes' name={id} onClick={()=>{closePopUpAndDeleteSelectedDeslectCheckBox(id, selectedList, setSelectedList); setRemoveCheckbox({id:id,status:false})}}/>
        <span className='delete_user_status' >X</span>
      </label>
    </div>
  )
}