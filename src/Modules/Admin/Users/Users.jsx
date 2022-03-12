import { Dashboard } from 'Components/Layout/Dashboard/Dashboard';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader';
import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin';
import { Search } from 'Components/Layout/Search/Search';

import React from 'react';
import './Users.css'

export const Users = () => {
  return (
    <div className='users_menu_admin'>
      <MenuAdmin nameAdmin={"Usuarios"}/>
      <div className='users'>
        <Search nameSearch={"Buscar Usuarios"}/>
        <DashboardHeader header1={"Perfil"} header2={"Apellidos"} header3={"Nombres"} header4={"Correo"} header5={"Reportes"} header6={"Estado Usuario"} header7={"Conf. cambios"}/>
        <Dashboard/>
      </div>
    </div>
  )
}
