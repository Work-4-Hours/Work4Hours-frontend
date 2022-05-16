import React, { useState, useEffect } from 'react';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';

import './UserInfo.css';


export const UserInfo = ({deleteUserSelect,objectAllUsers,objectAllStatus, listUserSelectSet, selectUsers}) => {

  const { fotop, apellidos, nombres, correo, cantidadReportes, idEstado,nombre_estado, idusuario} = objectAllUsers;
  const {data}=objectAllStatus;

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

  // const validateChangeStatus = (cantidadReportes) => {
  //   // console.log(cantidadReportes);
  //   console.log(nombre_estado);
  //   if(cantidadReportes === 25){
  //     return nombre_estado = "Suspendido por 3 días"
  //   }
  //   else if(cantidadReportes === 50){
  //     return nombre_estado = "Inhabilitado";
  //   }
  //   else{
  //     return nombre_estado;
  //   }
  // }

  // useEffect(() => {    // changeState({NumberReports})
  //   validateChangeStatus (cantidadReportes)
  // }, [''])

  return (
    <div className='user_info'>
      <div className='fieldSize3 center_img'> 
        <img className='admin_user_photo' src={fotop} alt="user_photo" />
      </div>
      <p className='ellipsis fieldSize20'>{apellidos}</p>
      <p className='ellipsis fieldSize20'> {nombres}</p>
      <p className='ellipsis fieldSize17'>{correo}</p>
      <InfoReportAdmin NumberReports={cantidadReportes} idUsers={idusuario}/>
      <StatusUsersAdmin userSelectListSelectSetStatus={userSelectListSelectSetStatus} idUsuario={idusuario} statusChange={changeStatus} statusChangeSet={setChangeStatus} userStatus={nombre_estado} idUserStatus={idEstado} data={data} capturarid={setIdStatus} NumberReports={cantidadReportes}/>
      <CheckBoxAdmin deleteUserSelect={deleteUserSelect} designCheckBoxAdmin={"span_confirm_changes"} id={idusuario} correo={correo} idStatus={idStatus} fotop={fotop} listUserSelectSet={listUserSelectSet} selectUsers={selectUsers} />
    </div>
  )
}
