import React, { useState } from 'react';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';
import {PhotoUserProfile} from '../PhotoUserProfile/PhotoUserProfile';	

import './UserInfo.css';


export const UserInfo = ({deleteUserSelect,objectAllUsers,objectAllStatus, listUserSelectSet, selectUsers}) => {
  const { fotop, apellidos, nombres, correo, cantidadReportes, idEstado,nombre_estado, idusuario,color} = objectAllUsers;
  console.log(color);
  const {data}=objectAllStatus;
  const infoPhoto={name:nombres, color:color, userPicture:fotop}  

  const [idStatus, setIdStatus] = useState(0);
  const [changeStatus, setChangeStatus]=useState(false);

  const userSelectListSelectSetStatus =(statusChange, idUser, idStatus)=>{

    if (statusChange===true){
      selectUsers.map(item=>{
        if(item.idUsuario===idUser){
          item.idEstado=idStatus
        }
      })
      listUserSelectSet=([...selectUsers]);
      setChangeStatus(!changeStatus);
    }
  }

  return (
    <div className='user_info'>
      <div className='fieldSize3 center_img'>
         {/* <PhotoUserProfile infoProfile={infoPhoto} style={"small_profile"} small={true}/> */}
        <img className='admin_user_photo' src={fotop} alt="user_photo" />
      </div>
      <p className='ellipsis fieldSize20'>{apellidos}</p>
      <p className='ellipsis fieldSize20'> {nombres}</p>
      <p className='ellipsis fieldSize17'>{correo}</p>
      <InfoReportAdmin NumberReports={cantidadReportes}/>
      <StatusUsersAdmin userSelectListSelectSetStatus={userSelectListSelectSetStatus} idUsuario={idusuario} statusChange={changeStatus} statusChangeSet={setChangeStatus} userStatus={nombre_estado} idUserStatus={idEstado} data={data} capturarid={setIdStatus}/>
      <CheckBoxAdmin deleteUserSelect={deleteUserSelect} designCheckBoxAdmin={"span_confirm_changes"} id={idusuario} correo={correo} idStatus={idStatus} fotop={fotop} listUserSelectSet={listUserSelectSet} selectUsers={selectUsers} />
    </div>
  )
}
