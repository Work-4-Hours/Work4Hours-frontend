import React,{useEffect,useContext} from 'react';

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

  const { admin, logoutAdmin, getToken, sendNotification } = useContext(AdminContext);
  const adminGet= useGetAdmin();
  const searchAdmin=useSearchAdmin();
  const statusAdmin=useStatusAdmin();

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
    searchString:"SearchServices"
  }

  const dataFilter={
    changeFilteringOptionId:searchAdmin.changeFilteringOptionId,
    unSelect:searchAdmin.unSelect,
    data:[
      {id:1, nombre:"Reportes"},
      {id:2, nombre:"Nombre del servicio"},
      {id:3, nombre:"Tipo"}
    ]
  }

  const dataServices={
    objectAllStatus:adminGet.dataState,
    getAdminReports:adminGet.getAdminReports,
    dataReport:adminGet.dataReport,
    deletingSelectedDeslectCheckbox:statusAdmin.deletingSelectedDeslectCheckbox, 
    objectSelectedSetState:statusAdmin.objectSelectedSetState, 
    selectedList:statusAdmin.selectedList, 
    setselectedList:statusAdmin.setselectedList, 
    changeStatus:statusAdmin.changeStatus,
    setChangeStatus:statusAdmin.setChangeStatus
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
    setData:adminGet.setData,
    selectedList:statusAdmin.selectedList, 
    setselectedList: statusAdmin.setselectedList,
    token:getToken(),
    email:admin.info[0].email,
    typePetition:"Services",
    typeAdmin: "servicio"
    //sendNotification
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
              <ServiceInfo objectServiceInfo={item} dataServices={dataServices} key={item.idservicio}/>)
            ) }/>
          :
          <Dashboard result="center_message" componetContent={<h1 className='title_admin'>No se encontraron resultados</h1>}/>
        }
        <PopupConfirmChanges objectContent={
        statusAdmin.selectedList?.map(item=>(
          <ObjectDelete servicesSelect={item} deletingSelectedDeslectCheckbox={statusAdmin.deletingSelectedDeslectCheckbox} key={item.id}/>
        ))
      } dataPopupConfirmChanges={dataPopupConfirmChanges}/>
      </div>
    </div>
  )
}