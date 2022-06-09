import React,{useState} from 'react';
import './ServiceInfo.css';

import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';
import { DescriptionServiceAdmin } from '../DescriptionServiceAdmin/DescriptionServiceAdmin';
import { MessageUserAdmin } from '../MessageUserAdmin/MessageUserAdmin';
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';



export const ServiceInfo = ({objectServiceInfo, dataServices}) => {
  const {apelacion, cantidadReportes, descripcionServicio, estado, fotop, nombreServicio, nombreUsuario, idservicio, idusuario,idEstado,color}=objectServiceInfo;
  
  const {objectAllStatus,
    getAdminReports,
    dataReport,
    deletingSelectedDeslectCheckbox, 
    objectSelectedSetState, 
    selectedList, 
    setselectedList, 
    changeStatus,
    setChangeStatus}=dataServices;

  const [idStatus, setIdStatus] = useState(0);

  const photoData={name:nombreUsuario, color:color, userPicture:fotop};

  const dataReports = {
    numberReports: cantidadReportes,
    idObject: idservicio, 
    getAdminReports: getAdminReports,
    dataReport: dataReport,
    typeReport:"ReportsServices"
  }

  const dataStatusAdmin={
    objectSelectedSetState:objectSelectedSetState,
    idObject:idservicio, 
    nameStatus:estado, 
    idObjectStatus:idEstado, 
    data:objectAllStatus, 
    numberReports:cantidadReportes,
    changeStatus:changeStatus,
    setChangeStatus:setChangeStatus,
    setIdStatus:setIdStatus
  }

  const dataCheckBoxAdmin={
    objectAll:objectServiceInfo, 
    designCheckBoxAdmin:"span_confirm_changes", 
    deletingSelectedDeslectCheckbox:deletingSelectedDeslectCheckbox,
    selectedList:selectedList, 
    setselectedList:setselectedList,
    boardType:false,
    idStatus:idStatus
  }


  return (
    <div className='user_info'>
      <p className='ellipsis fieldSize15  '>{nombreServicio}</p>
      <div className='fieldSize15 space_photo_username'>
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