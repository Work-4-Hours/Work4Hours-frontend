import React from 'react';
import './ServiceInfo.css';

import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';
import { DescriptionServiceAdmin } from '../DescriptionServiceAdmin/DescriptionServiceAdmin';
import { MessageUserAdmin } from '../MessageUserAdmin/MessageUserAdmin';

export const ServiceInfo = () => {
  return (
    <div className='user_info'>
      <p className='ellipsis fieldSize15  '>Pintar casas</p>
      <div className='fieldSize15 space_photo_username'>
        <img className='admin_user_photo center_img' src="https://cdn.pixabay.com/photo/2021/09/12/08/49/headset-6617715_960_720.png" alt="user_photo" />
        <p className='ellipsis'>Fantasmita </p>
      </div>
      <DescriptionServiceAdmin/>
      <MessageUserAdmin/>
      <InfoReportAdmin/>
      <StatusUsersAdmin/>
      <CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes"}/>
    </div>
  )
}