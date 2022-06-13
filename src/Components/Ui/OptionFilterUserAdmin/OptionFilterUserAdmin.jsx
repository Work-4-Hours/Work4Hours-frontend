import React from 'react'
import './OptionFilterUserAdmin.css'

export const OptionFilterUserAdmin = ({option,unSelect}) => {
    const{nombre,id}=option;

  return (
    <div className='typ_report'>
        <label>{nombre}</label>
        <input type="radio" id={id} name ="filters" className='checkbox_admin_filter' onDoubleClick={(e)=>unSelect(e)}/>
    </div>
  )
}
