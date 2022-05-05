
import React, { useState } from 'react';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';


import './UserInfo.css';


export const UserInfo = ({select,objectAllUsers,objectAllStatus, listprueba}) => {

  const { fotop, apellidos, nombres, correo, cantidadReportes, idEstado,nombre_estado, idusuario} = objectAllUsers;
  const {data}=objectAllStatus;

  const [idStatus, setIdStatus]=useState("");

  const capid=(idUserStatus)=>{
    setIdStatus(idUserStatus);
  }


  return (
    <div className='user_info'>
      <div className='fieldSize3 center_img'> 
        <img className='admin_user_photo' src={fotop} alt="user_photo" />
      </div>
      <p className='ellipsis fieldSize20'>{apellidos}</p>
      <p className='ellipsis fieldSize20'> {nombres}</p>
      <p className='ellipsis fieldSize17'>{correo}</p>
      <InfoReportAdmin NumberReports={cantidadReportes}/>
      <StatusUsersAdmin  UserStatus={nombre_estado} idUserStatus={idEstado} data={data} capturarid={capid}/>
      <CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes"} id={idusuario} correo={correo} idStatus={idStatus} pruebalist={listprueba} select={select} />
    </div>
  )
}
