import React from 'react'
import { GoAlert } from 'react-icons/go';
import './PopupTitleAdmin.css'

export const PopupTitleAdmin = ({title}) => {
  return (
    <div className='popup_title_admin'>
        <GoAlert className='icon_alert_admin'/>
        <h3>{title}</h3>
    </div>
  )
}