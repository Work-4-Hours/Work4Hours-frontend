import React, { useState, useEffect } from 'react';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';
import './UserInfo.css';


export const UserInfo = ({objectAllUsers,dataUsers}) => {

  const { fotop, apellidos, nombreUsuario, correo, cantidadReportes, idEstado,nombre_estado, idusuario, color} = objectAllUsers;
  const {objectAllStatus}=dataUsers;
  const photoData={name:nombreUsuario, color:color, userPicture:fotop};


  const [idStatus, setIdStatus] = useState(0);
  const [changeStatus, setChangeStatus]=useState(false);

  const dataStatusUsersAdmin={
    // objectSelectListSelectSetStatus:userSelectListSelectSetStatus, 
    idObject:idusuario, 
    statusChange:changeStatus, 
    statusChangeSet:setChangeStatus, 
    nameStatus:nombre_estado, 
    idObjectStatus:idEstado, 
    data:objectAllStatus, 
    capturarid:setIdStatus, 
    numberReports:cantidadReportes
  }


  return (
    <div className='user_info'>
      <PhotoAdmin photoData={photoData}/>
      <p className='ellipsis fieldSize20'>{apellidos}</p>
      <p className='ellipsis fieldSize20'> {nombreUsuario}</p>
      <p className='ellipsis fieldSize17'>{correo}</p>

      
      <StatusUsersAdmin dataStatusUsersAdmin={dataStatusUsersAdmin} />
      
    </div>    
  )
}
