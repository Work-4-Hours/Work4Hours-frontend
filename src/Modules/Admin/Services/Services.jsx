import React from 'react';
import './Services.css';

import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin.jsx';
import { Search } from 'Components/Layout/Search/Search.jsx';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader.jsx';
import { Dashboard } from 'Components/Layout/Dashboard/Dashboard.jsx';
import { Button } from 'Components/Ui/Button/Button';

export const Services = () => {
  return (
    <div className='admin_menu'>
      <MenuAdmin nameAdmin={"Servicios"} btnActive={"button btn_change_color_gray btn_with_admin"} btnInactive={"button btn_with_admin"}/>
      <div className='manager_control'>
        <Search nameSearch={"Buscar Servicios"}/>
        <DashboardHeader header1={"Servicio"} header2={"Usuario"} header3={"Descripción"} header4={"Apelación"} header5={"Reportes"} header6={"Estado Usuario"} header7={"Seleccionar"} propsReport={"report"}/>
        <Dashboard/>
        <div className='btn_save_changes_admin_position'>
          <Button className="button btn_save_changes_admin" value="Guardar Cambios"/>
        </div>
      </div>
    </div>
  )
}