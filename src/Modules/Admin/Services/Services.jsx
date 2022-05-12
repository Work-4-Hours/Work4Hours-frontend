import React,{useEffect} from 'react';
import './Services.css';

import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin.jsx';
import { Search } from 'Components/Layout/Search/Search.jsx';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader.jsx';
import { Dashboard } from 'Components/Layout/Dashboard/Dashboard.jsx';
import { Button } from 'Components/Ui/Button/Button';
import { ServiceInfo } from 'Components/Ui/ServiceInfo/ServiceInfo';
import { FilterServiceAdmin } from 'Components/Ui/FilterServiceAdmin/FilterServiceAdmin';
import { PopupConfirmChanges } from 'Components/Layout/PopupConfirmChanges/PopupConfirmChanges';
import { ObjectDelete } from 'Components/Ui/ObjectDelete/ObjectDelete';
import { GetAdmin } from 'Functions/ReusableFunctions';


export const Services = () => {
  const { data } = GetAdmin('Services');
  const dataState= GetAdmin('State');
  
  return (
    <div className='container_admin'>
      <MenuAdmin nameAdmin={"Servicios"} btnActive={"button btn_change_color_gray btn_with_admin"} btnInactive={"button btn_with_admin"}/>
      <div className='manager_control'>
        <Search nameSearch={"Buscar Servicios"} filter={<FilterServiceAdmin/>}/>
        <DashboardHeader space1={'fieldSize15 '} space2={'fieldSize15 '} space3={'fieldSize15 '} space4={'fieldSize15 '} space5={'fieldSize8 '} space6={'fieldSize13 '} space7={'fieldSize8 '} header1={"Servicio"} header2={"Usuario"} header3={"Descripción"} header4={"Apelación"} header5={"Reportes"} header6={"Estado Usuario"} header7={"Seleccionar"} propsReport={"reportColor"}/>
        <Dashboard componetContent={ 
          data?.map(item=>
            <ServiceInfo objectServiceInfo={item} objectAllStatus={dataState} key={item.idservicio}/>
          )}/>
        <PopupConfirmChanges nameTitle={"Esta seguro de querer eliminar: "} valueButton={"Eliminar"} objectContent={<ObjectDelete/>} styleObjects={"popup_confirm_changes_content_objects_services"}/>
      </div>
    </div>
  )
}