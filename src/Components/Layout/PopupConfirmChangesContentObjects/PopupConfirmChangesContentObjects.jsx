import { ObjectStatus } from 'Components/Ui/ObjectStatus/ObjectStatus'
import React from 'react'
import './PopupConfirmChangesContentObjects.css'

export const PopupConfirmChangesContentObjects = () => {
  return (
    <div className='popup_confirm_changes_content_objects scroll'>
    <ObjectStatus/>
    <ObjectStatus/>
    <ObjectStatus/>
    <ObjectStatus/>
    
    </div>
  )
}
