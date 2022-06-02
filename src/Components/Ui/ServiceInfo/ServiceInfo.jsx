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
  const {objectAllStatus}=dataServices;

  const [idStatus, setIdStatus] = useState(0);
  const [changeStatus, setChangeStatus]=useState(false);
  const photoData={name:nombreUsuario, color:color, userPicture:fotop};

  const dataStatusUsersAdmin={
    // objectSelectListSelectSetStatus:userSelectListSelectSetStatus, 
    idObject:idservicio, 
    statusChange:changeStatus, 
    statusChangeSet:setChangeStatus, 
    nameStatus:estado, 
    idObjectStatus:idEstado, 
    data:objectAllStatus, 
    capturarid:setIdStatus, 
    numberReports:cantidadReportes
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
      <InfoReportAdmin NumberReports={cantidadReportes}/>
      <StatusUsersAdmin dataStatusUsersAdmin={dataStatusUsersAdmin} />
      <CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes"}/>
    </div>
  )
}