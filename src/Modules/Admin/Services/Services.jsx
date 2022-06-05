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
import { useAdmin } from 'CustomHooks/useAdmin';



export const Services = () => {


  const { data,
    getAdmin, 
    dataState, 
    deletingSelectedDeslectCheckbox, 
    objectSelectedSetState, 
    selectedList, 
    setselectedList, 
    changeStatus,
    setChangeStatus} = useAdmin();

  useEffect(()=>{
    getAdmin('Services');
    getAdmin('State');
  },[])
    
  const dataMenuAdmin = {
    nameAdmin: "Servicios",
    buttonActivated: "btn_change_color_gray",
    buttonDeactivated: " ",
  }

  const dashboardHeader = {
    columWidth1 : 'fieldSize15',
    columWidth2 : 'fieldSize15',
    columWidth3 : 'fieldSize15',
    columWidth4 : 'fieldSize15',
    columWidth5 : 'fieldSize8 ',
    columWidth6 : 'fieldSize13',
    columWidth7 : 'fieldSize8', 
    columText1 : 'Servicio',
    columText2 : 'Usuario',
    columText3 : 'Descripción',
    columText4 : 'Apelación',
    columText5 : 'Reportes',
    columText6 : 'Estado Usuario',
    columText7 : 'Seleccionar',
    colorTituleReport: 'reportColor'
  }

  const dataServices={
    objectAllStatus:dataState,
    deletingSelectedDeslectCheckbox:deletingSelectedDeslectCheckbox, 
    objectSelectedSetState:objectSelectedSetState, 
    selectedList:selectedList, 
    setselectedList:setselectedList, 
    changeStatus:changeStatus,
    setChangeStatus:setChangeStatus
  }

  const dataPopupConfirmChanges = {
    selectedList:selectedList, 
    nameTitle:"Esta seguro de querer actualizar el estado de: ",
    valueButton:"Actualizar",


    //infoAdmin, token,  
    //sendNotification
  }

  return (
    <div className='container_admin'>
      <MenuAdmin dataMenuAdmin={dataMenuAdmin}/>
      <div className='manager_control'>
        <DashboardHeader dataDashboardHeader={dashboardHeader}/>
        <Dashboard componetContent={
          data?.map(item=>(
            <ServiceInfo objectServiceInfo={item} dataServices={dataServices} key={item.idservicio}/>)
          ) }/>
        <PopupConfirmChanges objectContent={
        selectedList?.map(item=>(
          <ObjectDelete servicesSelect={item} deletingSelectedDeslectCheckbox={deletingSelectedDeslectCheckbox} key={item.id}/>
        ))
      } dataPopupConfirmChanges={dataPopupConfirmChanges}/>
      </div>
    </div>
  )
}