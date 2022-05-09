import React, { useState } from 'react';
import './Users.css';

import { Dashboard } from 'Components/Layout/Dashboard/Dashboard';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader';
import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin';
import { PopupConfirmChanges } from 'Components/Layout/PopupConfirmChanges/PopupConfirmChanges';
import { Search } from 'Components/Layout/Search/Search';
import { UserInfo } from 'Components/Ui/UserInfo/UserInfo';
import { FilterUserAdmin } from 'Components/Ui/FilterUserAdmin/FilterUserAdmin';
import { ObjectStatus } from 'Components/Ui/ObjectStatus/ObjectStatus'
import { GetAdmin } from 'Functions/ReusableFunctions';


export const Users = () => {

  const dataUsers = GetAdmin('Users');
  const dataState= GetAdmin('State');
  const [listUsersSelect, setListUserSelect]=useState([]);
  console.log(listUsersSelect);

  const deleteUserSelect =(id)=>{
    listUsersSelect.map(item=>{
      if(item.idUsuario===id){
        const index=listUsersSelect.indexOf(item);
        listUsersSelect.splice(index,1)
      }
    })
    setListUserSelect([...listUsersSelect]);
  }
  
  
  
  return (
    <div className='container_admin'>
      <MenuAdmin nameAdmin={"Usuarios"} btnActive={"button btn_with_admin"} btnInactive={"button btn_change_color_gray btn_with_admin"}/>
      <div className='manager_control'>
        <Search nameSearch={"Buscar Usuarios"} filter={<FilterUserAdmin/>}/>
        <DashboardHeader space1={'fieldSize3 '} space2={'fieldSize20 '} space3={'fieldSize20 '} space4={'fieldSize17 '} space5={'fieldSize8 '} space6={'fieldSize13 '} space7={'fieldSize8 '} header1={"Perfil"} header2={"Apellidos"} header3={"Nombres"} header4={"Correo"} header5={"Reportes"} header6={"Estado Usuario"} header7={"Conf. cambios"} />
        <Dashboard componetContent={
          dataUsers.data?.map(item=>
            <UserInfo deleteUserSelect={deleteUserSelect} objectAllUsers={item} objectAllStatus={dataState} listUserSelectSet={setListUserSelect} selectUsers={listUsersSelect} key={item.idusuario}/>
          ) }/>
        <PopupConfirmChanges objectContent={
          listUsersSelect.map(item=>
        <ObjectStatus userSelect={item} deleteUserSelect={deleteUserSelect} key={item.idUsuario}/> )} nameTitle={"Esta seguro de querer actualizar el estado de: "} valueButton={"Actualizar"}  styleObjects={"popup_confirm_changes_content_objects_users"}/>
      </div>
    </div>
  )
}