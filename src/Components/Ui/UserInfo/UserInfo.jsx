import React, { useState} from 'react';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';
import './UserInfo.css';

export const UserInfo = ({objectAllUsers,dataUsers}) => {

  const [notificationAutomaticSuspension, setNotificationAutomaticSuspension] = useState("background_object_info");
  const [idStatus, setIdStatus] = useState(0);
  const { 
    fotop, 
    apellidos, 
    nombreUsuario, 
    correo, 
    cantidadReportes, 
    idEstado,
    nombre_estado, 
    id, 
    color
  } = objectAllUsers;

  const {
    objectAllStatus,
    getAdminReports,
    deletingSelectedDeslectCheckbox,
    dataReport,
    objectSelectedSetState, 
    selectedList, 
    setSelectedList,
    changeStatus,
    setChangeStatus,
    removeCheckbox,
    setRemoveCheckbox
  }=dataUsers;
  

  
  const photoData={name:nombreUsuario, color:color, userPicture:fotop};

  const dataStatusAdmin={
    objectSelectedSetState:objectSelectedSetState, 
    idObject:id,
    nameStatus:nombre_estado, 
    idObjectStatus:idEstado, 
    data:objectAllStatus, 
    changeStatus:changeStatus,
    setChangeStatus:setChangeStatus,
    setIdStatus:setIdStatus,
    setNotificationAutomaticSuspension:setNotificationAutomaticSuspension,
    selectedList:selectedList,
    setSelectedList:setSelectedList,
  }

  const dataCheckBoxAdmin={
    objectAll:objectAllUsers, 
    designCheckBoxAdmin:"span_confirm_changes", 
    deletingSelectedDeslectCheckbox:deletingSelectedDeslectCheckbox,
    boardType:true,
    idStatus:idStatus,
    selectedList:selectedList,
    setSelectedList:setSelectedList,
    removeCheckbox:removeCheckbox,
    setRemoveCheckbox:setRemoveCheckbox
  }

  const dataReports = {
    numberReports: cantidadReportes,
    idObject: id, 
    getAdminReports: getAdminReports,
    dataReport: dataReport,
    typeReport:"ReportsUsers"
  }


  return (
    <div className={'object_info ' + notificationAutomaticSuspension}>
      <PhotoAdmin photoData={photoData}/>
      <p className='ellipsis fieldSize20 hide hide2'>{apellidos}</p>
      <p className='ellipsis fieldSize20 hide'> {nombreUsuario}</p>
      <p className='ellipsis fieldSize17'>{correo}</p>
      <InfoReportAdmin dataReports={dataReports} />
      <StatusUsersAdmin dataStatusAdmin={dataStatusAdmin} />
      <CheckBoxAdmin  dataCheckBoxAdmin={dataCheckBoxAdmin}/>
    </div>    
  )
}
