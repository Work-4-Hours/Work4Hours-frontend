import React,{useEffect,useContext, useState} from 'react';
import './Services.css';

import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin.jsx';
import { Search } from 'Components/Layout/Search/Search.jsx';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader.jsx';
import { Dashboard } from 'Components/Layout/Dashboard/Dashboard.jsx';
import { ServiceInfo } from 'Components/Ui/ServiceInfo/ServiceInfo';

import { PopupConfirmChanges } from 'Components/Layout/PopupConfirmChanges/PopupConfirmChanges';
import { ObjectDelete } from 'Components/Ui/ObjectDelete/ObjectDelete';
import { useAdmin } from 'CustomHooks/useAdmin';
import { AdminContext } from 'Context/AdminContext';


export const Services = () => {

  const { admin, logoutAdmin, getToken, sendNotification } = useContext(AdminContext)
  const [id,setId] = useState(0);
  const { data,
    setData,
    getAdmin, 
    dataState, 
    getAdminReports,
    dataReport,
    deletingSelectedDeslectCheckbox, 
    objectSelectedSetState, 
    selectedList, 
    setselectedList, 
    changeStatus,
    setChangeStatus,
    postWorkSearch,
    searchWord,
    validateSearchWord,
    changeFilteringOptionId,
    unSelect
  } = useAdmin();

  useEffect(()=>{
    getAdmin('Services');
    getAdmin('State');
  },[])

  useEffect(()=>{
    if(searchWord.length>0){
      setData(searchWord)
    }
    else{
      getAdmin('Services');
    }
  },[searchWord]) 
    
  const dataMenuAdmin = {
    nameAdmin: "Servicios",
    buttonActivated: "btn_change_color_gray",
    buttonDeactivated: " ",
    logoutAdmin: logoutAdmin
  }
  const dataSearch={
    nameSearch: "Buscar Usuarios",
    postWorkSearch:postWorkSearch,
    searchNumber:"generalSearchReportsServices",
    searchString:"SearchServices"
  }

  const dataFilter={
    changeFilteringOptionId:changeFilteringOptionId,
    unSelect:unSelect,
    data:[
      {nombre:"Reportes",id:1},
      {nombre:"Nombre del servicio",id:2},
      {nombre:"Tipo",id:3}
    ]
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
    getAdminReports:getAdminReports,
    dataReport:dataReport,
    id:id,
    setId:setId,
    typeReport:"ReportsServices",
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
    token:getToken(),
    email:admin.info[0].email,
    typePetition:"Services"
    //sendNotification
  }

  return (
    <div className='container_admin'>
      <MenuAdmin dataMenuAdmin={dataMenuAdmin}/>
      <div className='manager_control'>
        <Search dataSearch={dataSearch} dataFilter={dataFilter}/>
        <DashboardHeader dataDashboardHeader={dashboardHeader}/>
        {
          validateSearchWord ?
          <Dashboard componetContent={
            data?.map(item=>(
              <ServiceInfo objectServiceInfo={item} dataServices={dataServices} key={item.idservicio}/>)
            ) }/>
          :
          <Dashboard style="center_message" componetContent={<h1 className='title_admin'>No se encontraron resultados</h1>}/>
        }
        <PopupConfirmChanges objectContent={
        selectedList?.map(item=>(
          <ObjectDelete servicesSelect={item} deletingSelectedDeslectCheckbox={deletingSelectedDeslectCheckbox} key={item.id}/>
        ))
      } dataPopupConfirmChanges={dataPopupConfirmChanges}/>
      </div>
    </div>
  )
}