import React from 'react'
import './OptionFilterUserAdmin.css'

export const OptionFilterUserAdmin = ({option,setIdFilter}) => {
    const{nombre,id}=option;

    const unSelect = (e) => {
        setIdFilter(0);
        return e.target.checked = false
    }
  return (
    <div className='typ_report'>
        <label>{nombre}</label>
        <input type="radio" id={id} name ="filters" onDoubleClick={(e)=>unSelect(e)}/>
    </div>
  )
}
