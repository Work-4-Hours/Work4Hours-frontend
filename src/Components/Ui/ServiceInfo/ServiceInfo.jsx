import React,{useState} from 'react';
import './ServiceInfo.css';

import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';
import { DescriptionServiceAdmin } from '../DescriptionServiceAdmin/DescriptionServiceAdmin';
import { MessageUserAdmin } from '../MessageUserAdmin/MessageUserAdmin';
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';



export const ServiceInfo = ({objectServiceInfo, dataServices}) => {
  const {apelacion, cantidadReportes, descripcionServicio, estado, fotop, nombreServicio, nombreUsuario, id, idusuario,idEstado,color}=objectServiceInfo;
  
  const {objectAllStatus,
    getAdminReports,
    dataReport,
    deletingSelectedDeslectCheckbox, 
    objectSelectedSetState, 
    changeStatus,
    setChangeStatus,
    selectedList, 
    setSelectedList,
    removeCheckbox,
    setRemoveCheckbox
  }=dataServices;

  const [idStatus, setIdStatus] = useState(0);
  const [notificationAutomaticSuspension, setNotificationAutomaticSuspension] = useState("background_object_info");


  const photoData={name:nombreUsuario, color:color, userPicture:fotop};

  const dataReports = {
    numberReports: cantidadReportes,
    idObject: id, 
    getAdminReports: getAdminReports,
    dataReport: dataReport,
    typeReport:"ReportsServices"
  }

  const dataStatusAdmin={
    objectSelectedSetState:objectSelectedSetState,
    idObject:id, 
    nameStatus:estado, 
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
    objectAll:objectServiceInfo, 
    designCheckBoxAdmin:"span_confirm_changes", 
    deletingSelectedDeslectCheckbox:deletingSelectedDeslectCheckbox,
    selectedList:selectedList,
    setSelectedList:setSelectedList,
    boardType:false,
    idStatus:idStatus,
    removeCheckbox:removeCheckbox,
    setRemoveCheckbox:setRemoveCheckbox
  }


  return (
    <div className={'object_info ' + notificationAutomaticSuspension}>
      <p className='ellipsis fieldSize15 '>{nombreServicio}</p>
      <div className='fieldSize15 space_photo_username hide'>
        <PhotoAdmin photoData={photoData}/>
        <p className='ellipsis'>{nombreUsuario} </p>
      </div>
      <DescriptionServiceAdmin textDescription={descripcionServicio}/>
      <MessageUserAdmin textMessage={apelacion}/>
      <InfoReportAdmin dataReports={dataReports}/>
      <StatusUsersAdmin dataStatusAdmin={dataStatusAdmin} />
      <CheckBoxAdmin dataCheckBoxAdmin={dataCheckBoxAdmin}/>
    </div>
  )
}