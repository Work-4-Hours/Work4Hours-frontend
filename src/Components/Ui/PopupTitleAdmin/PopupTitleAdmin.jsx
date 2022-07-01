import React from 'react'
import { GoAlert } from 'react-icons/go';
import './PopupTitleAdmin.css'

export const PopupTitleAdmin = () => {
  return (
    <div className='popup_title_admin'>
        <GoAlert className='icon_alert_admin'/>
        <h2 className='title_popup_confirm_changes'>Esta seguro de querer actualizar el estado de:</h2>
    </div>
  )
}