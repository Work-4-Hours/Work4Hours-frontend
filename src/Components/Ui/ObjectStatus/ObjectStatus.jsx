import React from 'react'
import './ObjectStatus.css'
import { BsX } from 'react-icons/bs';

export const ObjectStatus = () => {
  return (
    <div className='object_status'>
      <img className='img_layout_status' src="https://cdn.pixabay.com/photo/2021/09/12/08/49/headset-6617715_960_720.png" alt="user_photo"/>
      <p>FantasmistaCat27@gmail.com</p>
      <BsX className='delete_user_status'/>
    </div>
  )
}

