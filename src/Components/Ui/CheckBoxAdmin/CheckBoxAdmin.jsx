import React from 'react'
import './CheckBoxAdmin.css'

export const CheckBoxAdmin = ({designCheckBoxAdmin}) => {
  return (
    <div className='text_center fieldSize8'>
      <label>
          <input type="checkbox" className='cb_confirm_changes'/>
          <span className={designCheckBoxAdmin}></span>
      </label>
    </div>
  )
}