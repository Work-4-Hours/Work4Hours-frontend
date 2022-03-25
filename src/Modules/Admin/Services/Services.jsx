import React from 'react';
import './Services.css';

import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin.jsx';
import { Search } from 'Components/Layout/Search/Search.jsx';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader.jsx';
import { Dashboard } from 'Components/Layout/Dashboard/Dashboard.jsx';
import { Button } from 'Components/Ui/Button/Button';
import { ServiceInfo } from 'Components/Ui/ServiceInfo/ServiceInfo';

export const Services = () => {
  return (
    <div className='container_admin'>
      <MenuAdmin nameAdmin={"Servicios"} btnActive={"button btn_change_color_gray btn_with_admin"} btnInactive={"button btn_with_admin"}/>
      <div className='manager_control'>
        <Search nameSearch={"Buscar Servicios"}/>
        <DashboardHeader space1={'fieldSize15 '} space2={'fieldSize15 '} space3={'fieldSize21 '} space4={'fieldSize21 '} space5={'fieldSize5 '} space6={'fieldSize8 '} space7={'fieldSize8 '} header1={"Servicio"} header2={"Usuario"} header3={"Descripción"} header4={"Apelación"} header5={"Reportes"} header6={"Estado Usuario"} header7={"Seleccionar"} propsReport={"report"}/>
        <Dashboard content={<ServiceInfo/>}/>
        <div className='btn_save_changes_admin_position'>
          <Button className="button btn_save_changes_admin" value="Guardar Cambios"/>
        </div>
      </div>
    </div>
  )
}