import React, { useState} from 'react';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';
import './UserInfo.css';


export const UserInfo = ({objectAllUsers,dataUsers}) => {
  
  const [idStatus, setIdStatus] = useState(0);
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
    getAdminReports,
    dataReport,
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
    setChangeStatus:setChangeStatus,
    setIdStatus:setIdStatus
  }

  const dataCheckBoxAdmin={
    objectAll:objectAllUsers, 
    designCheckBoxAdmin:"span_confirm_changes", 
    deletingSelectedDeslectCheckbox:deletingSelectedDeslectCheckbox,
    selectedList:selectedList, 
    setselectedList:setselectedList,
    boardType:true,
    idStatus:idStatus
  }

  const dataReports = {
    numberReports: cantidadReportes,
    idObject: idusuario, 
    getAdminReports: getAdminReports,
    dataReport: dataReport,
    typeReport:"ReportsUsers"
  }


  return (
    <div className='object_info'>
      <PhotoAdmin photoData={photoData}/>
      <p className='ellipsis fieldSize20'>{apellidos}</p>
      <p className='ellipsis fieldSize20'> {nombreUsuario}</p>
      <p className='ellipsis fieldSize17'>{correo}</p>
      <InfoReportAdmin dataReports={dataReports} />
      <StatusUsersAdmin dataStatusAdmin={dataStatusAdmin} />
      <CheckBoxAdmin dataCheckBoxAdmin={dataCheckBoxAdmin}/>
    </div>    
  )
}
