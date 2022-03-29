import React from 'react';
import './Users.css';

import { Dashboard } from 'Components/Layout/Dashboard/Dashboard';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader';
import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin';
import { PopupConfirmChanges } from 'Components/Layout/PopupConfirmChanges/PopupConfirmChanges';
import { Search } from 'Components/Layout/Search/Search';
import { UserInfo } from 'Components/Ui/UserInfo/UserInfo';
import { FilterUserAdmin } from 'Components/Ui/FilterUserAdmin/FilterUserAdmin';

export const Users = () => {
  
  return (
    <div className='container_admin'>
      <MenuAdmin nameAdmin={"Usuarios"} btnActive={"button btn_with_admin"} btnInactive={"button btn_change_color_gray btn_with_admin"}/>
      <div className='manager_control'>
        <Search nameSearch={"Buscar Usuarios"} filter={<FilterUserAdmin/>}/>
        <DashboardHeader space1={'fieldSize3 '} space2={'fieldSize21 '} space3={'fieldSize21 '} space4={'fieldSize22 '} space5={'fieldSize5 '} space6={'fieldSize8 '} space7={'fieldSize8 '} header1={"Perfil"} header2={"Apellidos"} header3={"Nombres"} header4={"Correo"} header5={"Reportes"} header6={"Estado Usuario"} header7={"Conf. cambios"} />
        <Dashboard content={<UserInfo/> }/>
        <PopupConfirmChanges/>
      </div>
    </div>
  )
}