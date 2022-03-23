import { Dashboard } from 'Components/Layout/Dashboard/Dashboard';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader';
import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin';
import { PopupConfirmChanges } from 'Components/Layout/PopupConfirmChanges/PopupConfirmChanges';
import { Search } from 'Components/Layout/Search/Search';
import { UserInfo } from 'Components/Ui/UserInfo/UserInfo';
import React from 'react';
import './Users.css'

export const Users = () => {
  
  return (
    <div className='container_admin'>
      <MenuAdmin nameAdmin={"Usuarios"} btnActive={"button btn_with_admin"} btnInactive={"button btn_change_color_gray btn_with_admin"}/>
      <div className='manager_control'>
        <Search nameSearch={"Buscar Usuarios"}/>
        <DashboardHeader space1={'fieldSize3 '} space2={'fieldSize5 '} space3={'fieldSize8 '} space4={'fieldSize21 '} space5={'fieldSize22 '} header1={"Perfil"} header2={"Apellidos"} header3={"Nombres"} header4={"Correo"} header5={"Reportes"} header6={"Estado Usuario"} header7={"Conf. cambios"} />
        <Dashboard content={<UserInfo/> }/>
        <PopupConfirmChanges/>
      </div>
    </div>
  )
}