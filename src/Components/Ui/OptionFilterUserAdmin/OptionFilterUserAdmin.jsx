import React from 'react'
import './OptionFilterUserAdmin.css'

export const OptionFilterUserAdmin = ({option, dataOptionFilter}) => {
    const {nombre,id}=option;
    const {unSelect, setNameFilter}=dataOptionFilter;
    
  return (
    <div className='typ_report'>
        <p>{nombre}</p>
        <label>
          <input type="radio" id={id} name="filters" className='checkbox_admin_filter' onDoubleClick={(e)=>{unSelect(e); setNameFilter('')}} onClick={(e)=>{setNameFilter(nombre); console.log(e);}} />
        </label>
    </div>
  )
}
