import React, { useEffect, useContext } from 'react';

import { DropDownAdminMenu } from 'Components/Layout/DropDownAdminMenu/DropDownAdminMenu';
import { VerticalAdminMenu } from 'Components/Layout/VerticalAdminMenu/VerticalAdminMenu';
import { Search } from 'Components/Layout/Search/Search';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader';
import { Dashboard } from 'Components/Layout/Dashboard/Dashboard';
import { UserInfo } from 'Components/Ui/UserInfo/UserInfo';
import {PopupConfirmChanges} from '../../../Components/Layout/PopupConfirmChanges/PopupConfirmChanges';
import { ObjectStatus } from 'Components/Ui/ObjectStatus/ObjectStatus';

import { AdminContext } from 'Context/AdminContext';
import { useGetAdmin } from 'CustomHooks/useGetAdmin';
import { useSearchAdmin } from 'CustomHooks/useSearchAdmin';
import { useStatusAdmin } from 'CustomHooks/useStatusAdmin';

import '.././Admin.css';

export const Users = () => {

  const { admin, logoutAdmin, getToken, sendNotification } = useContext(AdminContext)
  const adminGet=useGetAdmin();
  const searchAdmin=useSearchAdmin();
  const statusAdmin=useStatusAdmin();
    
  //To bring the initial data of the users
  useEffect(()=>{
    adminGet.getAdmin('Users');
    adminGet.getAdmin('State');
  },[])  


  //Dashboard setting according to the search
  useEffect(()=>{
    if(searchAdmin.searchWord.length>0){
      adminGet.setData(searchAdmin.searchWord)
    }
    else{
      adminGet.getAdmin('Users');
    }
  },[searchAdmin.searchWord]) 


  const dataMenuAdmin = {
    nameAdmin: "Usuarios",
    buttonActivated: " ",
    buttonDeactivated: " btn_change_color_gray",
    logoutAdmin: logoutAdmin
  }
  const dataSearch={
    nameSearch: "Búsqueda de Usuarios",
    postWorkSearch:searchAdmin.postWorkSearch,
    searchNumber:"generalSearchReports",
    searchString:"SearchUsers"
  }


  const dataFilter={
    changeFilteringOptionId:searchAdmin.changeFilteringOptionId,
    unSelect:searchAdmin.unSelect,
    data:[
      {id:1, nombre:"Tipo de Suspensión"},
      {id:2, nombre:"Reportes"},
      {id:3, nombre:"Correo"},
      {id:4, nombre:"Nombres y Apellidos"}
    ]
  }

  const dataUsers={
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
    columWidth1 : 'fieldSize3 hide',
    columWidth2 : 'fieldSize20 hide hide2',
    columWidth3 : 'fieldSize20 hide',
    columWidth4 : 'fieldSize17',
    columWidth5 : 'fieldSize8',
    columWidth6 : 'fieldSize13',
    columWidth7 : 'fieldSize8', 
    columText1 : 'Perfil',
    columText2 : 'Apellidos',
    columText3 : 'Nombres',
    columText4 : 'Correo',
    colorTituleReport: ' '
  }

  const dataPopupConfirmChanges = {
    getAdmin:adminGet.getAdmin,
    setData:adminGet.setData,
    selectedList:statusAdmin.selectedList, 
    setselectedList: statusAdmin.setselectedList,
    token:getToken(),
    email:admin.info[0].email,
    typePetition:"Users",
    typeAdmin: "usuario"
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
      {searchAdmin.validateSearchWord ?
        <Dashboard componetContent={
          adminGet.data?.map(item=>
            <UserInfo objectAllUsers={item} dataUsers={dataUsers} key={item.idusuario}/>  
          )}
        />
        :
        <Dashboard result="center_message" componetContent={<h1 className='title_admin'>No se encontraron resultados</h1>}/>
      
    }
      <PopupConfirmChanges objectContent={
        statusAdmin.selectedList?.map(item=>(
          <ObjectStatus userSelect={item} deletingSelectedDeslectCheckbox={statusAdmin.deletingSelectedDeslectCheckbox} key={item.id}/>
        ))
      } dataPopupConfirmChanges={dataPopupConfirmChanges}/>
      </div>
    </div>
  )
}