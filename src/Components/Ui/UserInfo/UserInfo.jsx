import React, { useState, useEffect } from 'react';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';
import './UserInfo.css';


export const UserInfo = ({objectAllUsers,dataUsers, dataReport, idUser, setIdUser }) => {

<<<<<<< HEAD
  const { fotop, apellidos, nombreUsuario, correo, cantidadReportes, idEstado,nombre_estado, idusuario, color} = objectAllUsers;
  const {objectAllStatus}=dataUsers;
=======
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
>>>>>>> 76a04240989fa484184e71d70533a4a03e0973b0

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

<<<<<<< HEAD
  const dataReports = {
    numberReports: cantidadReportes,
    idUserReports: idusuario, 
    dataReport: dataUsers.dataReport,
    idUser: dataUsers.idUser,
    setIdUser: dataUsers.setIdUser
  }
=======
>>>>>>> 76a04240989fa484184e71d70533a4a03e0973b0

  return (
    <div className='user_info'>
      <PhotoAdmin photoData={photoData}/>
      <p className='ellipsis fieldSize20'>{apellidos}</p>
      <p className='ellipsis fieldSize20'> {nombreUsuario}</p>
      <p className='ellipsis fieldSize17'>{correo}</p>
<<<<<<< HEAD
      <InfoReportAdmin dataReports={dataReports} />
      <StatusUsersAdmin dataStatusUsersAdmin={dataStatusUsersAdmin} />
      
=======

      <StatusUsersAdmin dataStatusAdmin={dataStatusAdmin} />
      <CheckBoxAdmin dataCheckBoxAdmin={dataCheckBoxAdmin}/>
>>>>>>> 76a04240989fa484184e71d70533a4a03e0973b0
    </div>    
  )
}
