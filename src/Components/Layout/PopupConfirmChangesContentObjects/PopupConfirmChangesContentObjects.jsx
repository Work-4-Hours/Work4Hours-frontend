import React from 'react'
import './PopupConfirmChangesContentObjects.css'


export const PopupConfirmChangesContentObjects = ({content, object}) => {
  return (
    <div className= {'scroll ' + object}>
      {content}
    </div>
  )
}
