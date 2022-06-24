import React from 'react'
import './OptionFilterUserAdmin.css'

export const OptionFilterUserAdmin = ({option, dataOptionFilter}) => {
    const {nombre,id}=option;
    const {unSelect, setNameFilter}=dataOptionFilter;

    const prueba=()=>{
      
    }
    
  return (
    <div className='typ_report'>
        <p>{nombre}</p>
        <label>
          <input type="radio" id={id} name="filter"  className='checkbox_admin_filter' onDoubleClick={(e)=>{unSelect(e); setNameFilter('')}} onClick={()=>{setNameFilter(nombre)}} />
        </label>
    </div>
  )
}