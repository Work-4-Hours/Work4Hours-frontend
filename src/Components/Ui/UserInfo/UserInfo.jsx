import React from 'react';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';


import './UserInfo.css';


export const UserInfo = ({objectAllU}) => {
  
  return (
    <div className='user_info'>
      <div className='fieldSize3 center_img'>
        <img className='admin_user_photo' src={objectAllU.fotop} alt="user_photo" />
      </div>
      <p className='ellipsis fieldSize20'>{objectAllU.apellidos}</p>
      <p className='ellipsis fieldSize20'> {objectAllU.nombres}</p>
      <p className='ellipsis fieldSize17'>{objectAllU.correo}</p>
      <InfoReportAdmin NumberReports={objectAllU.cantidadReportes}/>
      <StatusUsersAdmin UserStatus={objectAllU.nombre_estado}/>
      <CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes"}/>
    </div>
  )
}
