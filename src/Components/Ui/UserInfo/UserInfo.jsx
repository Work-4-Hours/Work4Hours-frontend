import React from 'react';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';


import './UserInfo.css';


export const UserInfo = () => {
  return (
    <div className='user_info'>
      <div className='fieldSize3 center_img'>
        <img className='admin_user_photo' src="https://cdn.pixabay.com/photo/2021/09/12/08/49/headset-6617715_960_720.png" alt="user_photo" />
      </div>
      <p className='ellipsis fieldSize20'>Cactus</p>
      <p className='ellipsis fieldSize20'>Fantasmita </p>
      <p className='ellipsis fieldSize17'>FantasmistaCat27@gmail.com</p>
      <InfoReportAdmin/>
      <StatusUsersAdmin/>
      <CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes"}/>
    </div>
  )
}
