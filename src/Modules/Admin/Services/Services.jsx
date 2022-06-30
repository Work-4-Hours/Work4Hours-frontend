import React,{useEffect,useContext, useState} from 'react';

import { DropDownAdminMenu } from 'Components/Layout/DropDownAdminMenu/DropDownAdminMenu';
import { VerticalAdminMenu } from 'Components/Layout/VerticalAdminMenu/VerticalAdminMenu';
import { Search } from 'Components/Layout/Search/Search.jsx';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader.jsx';
import { Dashboard } from 'Components/Layout/Dashboard/Dashboard.jsx';
import { ServiceInfo } from 'Components/Ui/ServiceInfo/ServiceInfo';
import { PopupConfirmChanges } from 'Components/Layout/PopupConfirmChanges/PopupConfirmChanges';
import { ObjectDelete } from 'Components/Ui/ObjectDelete/ObjectDelete';

import { AdminContext } from 'Context/AdminContext';
import { useGetAdmin } from 'CustomHooks/useGetAdmin';
import { useSearchAdmin } from 'CustomHooks/useSearchAdmin';
import { useStatusAdmin } from 'CustomHooks/useStatusAdmin';

import '.././Admin.css';

export const Services = () => {

  const { admin, logoutAdmin, getToken, selectedListServices, setSelectedListServices, removeSelectedListServices } = useContext(AdminContext);
  const adminGet= useGetAdmin();
  const searchAdmin=useSearchAdmin();
  const statusAdmin=useStatusAdmin();
  const [removeCheckbox, setRemoveCheckbox] = useState({id:0,status:true});

  //To bring the initial data of the services
  useEffect(()=>{
    adminGet.getAdmin('Services');
    adminGet.getAdmin('State');
  },[])

  //Dashboard setting according to the search
  useEffect(()=>{
    if(searchAdmin.searchWord.length>0){
      adminGet.setData(searchAdmin.searchWord)
    }
    else{
      adminGet.getAdmin('Services');
    }
  },[searchAdmin.searchWord]) 
    
  const dataMenuAdmin = {
    nameAdmin: "Servicios",
    buttonActivated: "btn_change_color_gray",
    buttonDeactivated: " ",
    logoutAdmin: logoutAdmin
  }
  const dataSearch={
    nameSearch: "Búsqueda de Servicios",
    postWorkSearch:searchAdmin.postWorkSearch,
    searchNumber:"generalSearchReportsServices",
    searchString:"SearchServices",
    nameFilter:searchAdmin.nameFilter,
    setNameFilter:searchAdmin.setNameFilter
  }

  const dataFilter={
    changeFilteringOptionId:searchAdmin.changeFilteringOptionId,
    changeFilterStatusInitial:searchAdmin.changeFilterStatusInitial,
    data:[
      {nombre:"Reportes",id:1},
      {nombre:"Nombre del servicio",id:2},
      {nombre:"Tipo",id:3}
    ],
    setNameFilter:searchAdmin.setNameFilter
  }

  const dataServices={
    objectAllStatus:adminGet.dataState,
    getAdminReports:adminGet.getAdminReports,
    dataReport:adminGet.dataReport,
    deletingSelectedDeslectCheckbox:statusAdmin.deletingSelectedDeslectCheckbox, 
    objectSelectedSetState:statusAdmin.objectSelectedSetState, 
    selectedList:selectedListServices, 
    setSelectedList:setSelectedListServices,
    changeStatus:statusAdmin.changeStatus,
    setChangeStatus:statusAdmin.setChangeStatus,
    removeCheckbox:removeCheckbox,
    setRemoveCheckbox:setRemoveCheckbox,
  }
  const dashboardHeader = {
    columWidth1 : 'fieldSize15',
    columWidth2 : 'fieldSize15 hide',
    columWidth3 : 'fieldSize15 hide',
    columWidth4 : 'fieldSize15 hide',
    columWidth5 : 'fieldSize8 ',
    columWidth6 : 'fieldSize13',
    columWidth7 : 'fieldSize8', 
    columText1 : 'Servicio',
    columText2 : 'Usuario',
    columText3 : 'Descripción',
    columText4 : 'Apelación',
    colorTituleReport: 'reportColor'
  }


  const dataPopupConfirmChanges = {
    getAdmin:adminGet.getAdmin,
    data:adminGet.data,
    setData:adminGet.setData,
    token:getToken(),
    email:admin.info[0].email,
    typePetition:"Services",
    typeAdmin: "servicio",
    isOpen:statusAdmin.isOpen,
    setIsOpen:statusAdmin.setIsOpen,
    //sendNotification
    selectedList:selectedListServices, 
    removeSelectedList:removeSelectedListServices
  }

  const dataDelete={
    closePopUpAndDeleteSelectedDeslectCheckBox:statusAdmin.closePopUpAndDeleteSelectedDeslectCheckBox,
    selectedList:selectedListServices, 
    setSelectedList:setSelectedListServices,
    setRemoveCheckbox:setRemoveCheckbox,
  }

  return (
    <div className='container_admin'>
      <div className='visibility_menu_admin_vertical'>
        <div className='container_menu_and_search_admin'>
          <DropDownAdminMenu dataMenuAdmin={dataMenuAdmin}/>
          <Search dataSearch={dataSearch} dataFilter={dataFilter}/>
        </div>
      </div>
      <VerticalAdminMenu dataMenuAdmin={dataMenuAdmin} />
      <div className='manager_control'>
        <Search dataSearch={dataSearch} dataFilter={dataFilter} visible={" hide"}/>
        <DashboardHeader dataDashboardHeader={dashboardHeader}/>
        {
          searchAdmin.validateSearchWord ?
          <Dashboard componetContent={
            adminGet.data?.map(item=>(
              <ServiceInfo objectServiceInfo={item} dataServices={dataServices} key={item.id}/>)
            ) }/>
          :
          <Dashboard result="center_message" componetContent={<h1 className='title_admin'>No se encontraron resultados</h1>}/>
        }
        <PopupConfirmChanges objectContent={
        selectedListServices?.map(item=>(
          <ObjectDelete servicesSelect={item} dataDelete={dataDelete} key={item.id}/>
        ))
      } dataPopupConfirmChanges={dataPopupConfirmChanges}/>
      </div>
    </div>
  )
}