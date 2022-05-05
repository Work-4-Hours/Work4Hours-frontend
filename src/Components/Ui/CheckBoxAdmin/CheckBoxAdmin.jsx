import React from 'react'
import './CheckBoxAdmin.css'

export const CheckBoxAdmin = ({designCheckBoxAdmin, id, correo}) => {


  return (
    <div className='text_center fieldSize8' >
      <label>
          <input type="checkbox" className='cb_confirm_changes' id={id} name={correo} onClick={(e)=>console.log(e)}/>
          <span className={designCheckBoxAdmin}></span>
      </label>
    </div>
  )
}