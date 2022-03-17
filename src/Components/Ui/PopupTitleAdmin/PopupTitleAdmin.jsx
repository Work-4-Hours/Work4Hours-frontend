import React from 'react'
import { GoAlert } from 'react-icons/go';
import './PopupTitleAdmin.css'

export const PopupTitleAdmin = () => {
  return (
    <div>
        <GoAlert className='icon_alert_admin'/>
        <h2>Esta seguro de querer actualizar el estado de: </h2>
    </div>
  )
}
