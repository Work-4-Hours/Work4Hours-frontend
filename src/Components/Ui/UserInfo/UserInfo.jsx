import React, { useState, useEffect } from 'react';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { InfoReportAdmin } from '../InfoReportAdmin/InfoReportAdmin';
import { PhotoAdmin } from '../PhotoAdmin/PhotoAdmin';
import { StatusUsersAdmin } from '../StatusUsersAdmin/StatusUsersAdmin';
import './UserInfo.css';


export const UserInfo = ({deleteUserSelect,objectAllUsers,objectAllStatus, listUserSelectSet, selectUsers}) => {

  const { fotop, apellidos, nombreUsuario, correo, cantidadReportes, idEstado,nombre_estado, idusuario, color} = objectAllUsers;

  const [idStatus, setIdStatus] = useState(0);
  const [changeStatus, setChangeStatus]=useState(false);
  const photoData={name:nombreUsuario, color:color, userPicture:fotop};

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

  // const returnUsers = (cantidadReportes) =>  {
  //   if (cantidadReportes === 25 || cantidadReportes === 50 ){
  //     return (
  //       <div className='user_info2'>
  //         <PhotoAdmin photoData={photoData}/>
  //         <p className='ellipsis fieldSize20'>{apellidos}</p>
  //         <p className='ellipsis fieldSize20'> {nombreUsuario}</p>
  //         <p className='ellipsis fieldSize17'>{correo}</p>
  //         <InfoReportAdmin NumberReports={cantidadReportes} idUsers={idusuario}/>
  //         <StatusUsersAdmin userSelectListSelectSetStatus={userSelectListSelectSetStatus} idUsuario={idusuario} statusChange={changeStatus} statusChangeSet={setChangeStatus} userStatus={nombre_estado} idUserStatus={idEstado} data={objectAllStatus} capturarid={setIdStatus} NumberReports={cantidadReportes}/>
  //         <CheckBoxAdmin objectAllUsers={objectAllUsers} deleteUserSelect={deleteUserSelect} designCheckBoxAdmin={"span_confirm_changes"} id={idusuario} correo={correo} idStatus={idStatus} fotop={fotop} listUserSelectSet={listUserSelectSet} selectUsers={selectUsers} />
  //       </div>
  //     )
  //   }
  //   else{
  //     return(
  //       <div className='user_info'>
  //         <PhotoAdmin photoData={photoData}/>
  //         <p className='ellipsis fieldSize20'>{apellidos}</p>
  //         <p className='ellipsis fieldSize20'> {nombreUsuario}</p>
  //         <p className='ellipsis fieldSize17'>{correo}</p>
  //         <InfoReportAdmin NumberReports={cantidadReportes} idUsers={idusuario}/>
  //         <StatusUsersAdmin userSelectListSelectSetStatus={userSelectListSelectSetStatus} idUsuario={idusuario} statusChange={changeStatus} statusChangeSet={setChangeStatus} userStatus={nombre_estado} idUserStatus={idEstado} data={objectAllStatus} capturarid={setIdStatus} NumberReports={cantidadReportes}/>
  //         <CheckBoxAdmin objectAllUsers={objectAllUsers} deleteUserSelect={deleteUserSelect} designCheckBoxAdmin={"span_confirm_changes"} id={idusuario} correo={correo} idStatus={idStatus} fotop={fotop} listUserSelectSet={listUserSelectSet} selectUsers={selectUsers} />
  //       </div>
  //     )
  //   }
  // }

  return (
    <div className='user_info'>
      <PhotoAdmin photoData={photoData}/>
      <p className='ellipsis fieldSize20'>{apellidos}</p>
      <p className='ellipsis fieldSize20'> {nombreUsuario}</p>
      <p className='ellipsis fieldSize17'>{correo}</p>
      <InfoReportAdmin NumberReports={cantidadReportes} idUsers={idusuario}/>
      <StatusUsersAdmin userSelectListSelectSetStatus={userSelectListSelectSetStatus} idUsuario={idusuario} statusChange={changeStatus} statusChangeSet={setChangeStatus} userStatus={nombre_estado} idUserStatus={idEstado} data={objectAllStatus} capturarid={setIdStatus} NumberReports={cantidadReportes}/>
      <CheckBoxAdmin objectAllUsers={objectAllUsers} deleteUserSelect={deleteUserSelect} designCheckBoxAdmin={"span_confirm_changes"} id={idusuario} correo={correo} idStatus={idStatus} fotop={fotop} listUserSelectSet={listUserSelectSet} selectUsers={selectUsers} />
    </div>
  )
}
