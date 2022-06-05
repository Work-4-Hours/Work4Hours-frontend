import React, { useState, useEffect } from 'react';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';
import './UserInfo.css';


export const UserInfo = ({objectAllUsers,dataUsers}) => {

  const { 
    fotop, 
    apellidos, 
    nombreUsuario, 
    correo, 
    cantidadReportes, 
    idEstado,
    nombre_estado, 
    idusuario, 
    color
  } = objectAllUsers;

  const {
    objectAllStatus,
    deletingSelectedDeslectCheckbox, 
    objectSelectedSetState, 
    selectedList, 
    setselectedList, 
    changeStatus,
    setChangeStatus
  }=dataUsers;
  
  const photoData={name:nombreUsuario, color:color, userPicture:fotop};


 

  const dataStatusAdmin={
    objectSelectedSetState:objectSelectedSetState, 
    idObject:idusuario,
    nameStatus:nombre_estado, 
    idObjectStatus:idEstado, 
    data:objectAllStatus, 
    numberReports:cantidadReportes,
    changeStatus:changeStatus,
    setChangeStatus:setChangeStatus
  }

  const dataCheckBoxAdmin={
    objectAll:objectAllUsers, 
    designCheckBoxAdmin:"span_confirm_changes", 
    deletingSelectedDeslectCheckbox:deletingSelectedDeslectCheckbox,
    selectedList:selectedList, 
    setselectedList:setselectedList,
    boardType:true
  }


  return (
    <div className='user_info'>
      <PhotoAdmin photoData={photoData}/>
      <p className='ellipsis fieldSize20'>{apellidos}</p>
      <p className='ellipsis fieldSize20'> {nombreUsuario}</p>
      <p className='ellipsis fieldSize17'>{correo}</p>

      <StatusUsersAdmin dataStatusAdmin={dataStatusAdmin} />
      <CheckBoxAdmin dataCheckBoxAdmin={dataCheckBoxAdmin}/>
    </div>    
  )
}
