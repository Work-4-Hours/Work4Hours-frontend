import React from 'react';
import './Services.css';

import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin.jsx';
import { Search } from 'Components/Layout/Search/Search.jsx';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader.jsx';
import { Dashboard } from 'Components/Layout/Dashboard/Dashboard.jsx';

export const Services = () => {
  return (
    <div className='menu_admin'>
      <MenuAdmin nameAdmin={"Servicios"}/>
      <div className='manager_control'>
        <Search nameSearch={"Buscar Servicios"}/>
        <DashboardHeader header1={"Servicio"} header2={"Usuario"} header3={"Descripción"} header4={"Apelación"} header5={"Reportes"} header6={"Estado Usuario"} header7={"Seleccionar"}/>
        <Dashboard/>
      </div>
    </div>
  )
}