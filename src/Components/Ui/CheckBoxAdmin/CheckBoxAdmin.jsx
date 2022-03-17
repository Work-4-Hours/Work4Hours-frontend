import React from 'react'
import './CheckBoxAdmin.css'

export const CheckBoxAdmin = () => {
  return (
    <div className='text_center'>
      <label className='lb_confirm_changes'>
          <input type="checkbox" className='cb_confirm_changes'/>
          <span className='span_confirm_changes'></span>
      </label>
    </div>
  )
}
