import React from 'react';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';


import './UserInfo.css';


export const UserInfo = ({objectAllUsers}) => {

  const { fotop, apellidos, nombres, correo, cantidadReportes, nombre_estado} = objectAllUsers;
  
  return (
    <div className='user_info'>
      <div className='fieldSize3 center_img'>
        <img className='admin_user_photo' src={fotop} alt="user_photo" />
      </div>
      <p className='ellipsis fieldSize20'>{apellidos}</p>
      <p className='ellipsis fieldSize20'> {nombres}</p>
      <p className='ellipsis fieldSize17'>{correo}</p>
      <InfoReportAdmin NumberReports={cantidadReportes}/>
      <StatusUsersAdmin UserStatus={nombre_estado}/>
      <CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes"}/>
    </div>
  )
}
