import React from 'react';
import { SelectAdmin } from '../SelectAdmin/SelectAdmin';
import './UserInfo.css';


export const UserInfo = () => {
  return (
    <div className='user_info'>
      <img className='admin_user_photo' src="https://cdn.pixabay.com/photo/2021/09/12/08/49/headset-6617715_960_720.png" alt="user_photo" />
      <p className='ellipsis'>Cactus</p>
      <p className='ellipsis'>Fantasmita </p>
      <p className='ellipsis'>FantasmistaCat27@gmail.com</p>
      <p className='text_center'>1000</p>
      <SelectAdmin/>
      <label className='cb_confirm_changes text_center'>
        <input type="checkbox"/>
        <span></span>
      </label>
    </div>
  )
}
