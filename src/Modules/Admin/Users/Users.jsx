import { Dashboard } from 'Components/Layout/Dashboard/Dashboard';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader';
import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin';
import { Search } from 'Components/Layout/Search/Search';
import { Button } from 'Components/Ui/Button/Button';


import React from 'react';


export const Users = () => {
  return (
    <div className='admin_menu'>
      <MenuAdmin nameAdmin={"Usuarios"} btnActive={"button btn_with_admin"} btnInactive={"button btn_change_color_gray btn_with_admin"}/>
      <div className='manager_control'>
        <Search nameSearch={"Buscar Usuarios"}/>
        <DashboardHeader header1={"Perfil"} header2={"Apellidos"} header3={"Nombres"} header4={"Correo"} header5={"Reportes"} header6={"Estado Usuario"} header7={"Conf. cambios"} />
        <Dashboard/>
        <div className='btn_save_changes_admin_position'>
          <Button className="button btn_save_changes_admin" value="Guardar Cambios"/>
        </div>
      </div>
    </div>
  )
}
