import React,{useState} from 'react';
import './ServiceInfo.css';

import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';
import { DescriptionServiceAdmin } from '../DescriptionServiceAdmin/DescriptionServiceAdmin';
import { MessageUserAdmin } from '../MessageUserAdmin/MessageUserAdmin';



export const ServiceInfo = ({objectServiceInfo, dataServices}) => {
  const {apelacion, cantidadReportes, descripcionServicio, estado, fotop, nombreServicio, nombreUsuario, idservicio, idusuario,idEstado,color}=objectServiceInfo;
  const {objectAllStatus}=dataServices;

  const [idStatus, setIdStatus] = useState(0);
  const [changeStatus, setChangeStatus]=useState(false);

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
        <img className='admin_user_photo center_img' src={fotop} alt="user_photo" />
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