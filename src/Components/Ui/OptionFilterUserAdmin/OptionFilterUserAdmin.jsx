import React from 'react'
import './OptionFilterUserAdmin.css'

export const OptionFilterUserAdmin = ({option, dataOptionFilter}) => {
    const {nombre,id}=option;
    const {unSelect, setNameFilter}=dataOptionFilter

  return (
    <div className='typ_report'>
        <label>{nombre}</label>
        <input type="radio" id={id} name ="filters" onDoubleClick={(e)=>unSelect(e)} onClick={()=>{setNameFilter(nombre)}}/>
    </div>
  )
}
