import React, { useEffect, useContext } from 'react';


import { Search } from 'Components/Layout/Search/Search';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader';
import { Dashboard } from 'Components/Layout/Dashboard/Dashboard';
import { UserInfo } from 'Components/Ui/UserInfo/UserInfo';

import {PopupConfirmChanges} from '../../../Components/Layout/PopupConfirmChanges/PopupConfirmChanges';
import { ObjectStatus } from 'Components/Ui/ObjectStatus/ObjectStatus';
import { AdminContext } from 'Context/AdminContext';
import { useAdmin } from 'CustomHooks/useAdmin';
import { VerticalAdminMenu } from 'Components/Layout/VerticalAdminMenu/VerticalAdminMenu';
import { DropDownAdminMenu } from 'Components/Layout/DropDownAdminMenu/DropDownAdminMenu';

import '.././Admin.css';


export const Users = () => {

  const { admin, logoutAdmin, getToken, sendNotification } = useContext(AdminContext)
    
  const { 
    data,
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
    unSelect} = useAdmin();

  //To bring the initial data of the users
  useEffect(()=>{
    getAdmin('Users');
    getAdmin('State');
  },[])  


  //Dashboard setting according to the search
  useEffect(()=>{
    if(searchWord.length>0){
      setData(searchWord)
    }
    else{
      getAdmin('Users');
    }
  },[searchWord]) 


  const dataMenuAdmin = {
    nameAdmin: "Usuarios",
    buttonActivated: " ",
    buttonDeactivated: " btn_change_color_gray",
    logoutAdmin: logoutAdmin
  }
  const dataSearch={
    nameSearch: "Búsqueda de Usuarios",
    postWorkSearch:postWorkSearch,
    searchNumber:"generalSearchReports",
    searchString:"SearchUsers"
  }


  const dataFilter={
    changeFilteringOptionId:changeFilteringOptionId,
    unSelect:unSelect,
    data:[
      {id:1, nombre:"Tipo de Suspensión"},
      {id:2, nombre:"Reportes"},
      {id:3, nombre:"Correo"},
      {id:4, nombre:"Nombres y Apellidos"}
    ]
  }

  const dataUsers={
    objectAllStatus:dataState,
    getAdminReports:getAdminReports,
    dataReport:dataReport,
    deletingSelectedDeslectCheckbox:deletingSelectedDeslectCheckbox, 
    objectSelectedSetState:objectSelectedSetState, 
    selectedList:selectedList, 
    setselectedList:setselectedList, 
    changeStatus:changeStatus,
    setChangeStatus:setChangeStatus
  }
  
  const dashboardHeader = {
    columWidth1 : 'fieldSize3',
    columWidth2 : 'fieldSize20',
    columWidth3 : 'fieldSize20',
    columWidth4 : 'fieldSize17',
    columWidth5 : 'fieldSize8',
    columWidth6 : 'fieldSize13',
    columWidth7 : 'fieldSize8', 
    columText1 : 'Perfil',
    columText2 : 'Apellidos',
    columText3 : 'Nombres',
    columText4 : 'Correo',
    columText5 : 'Reportes',
    columText6 : 'Estado Usuario',
    columText7 : 'Conf. cambios',
    colorTituleReport: ' '
  }

  const dataPopupConfirmChanges = {
    getAdmin:getAdmin,
    setData:setData,
    selectedList:selectedList, 
    setselectedList: setselectedList,
    nameTitle:"Esta seguro de querer actualizar el estado de: ",
    valueButton:"Actualizar",
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
      <Search dataSearch={dataSearch} dataFilter={dataFilter} visible={" visibility_search_admin"}/>
      <DashboardHeader dataDashboardHeader={dashboardHeader}/>
      {validateSearchWord ?
        <Dashboard componetContent={
          data?.map(item=>
            <UserInfo objectAllUsers={item} dataUsers={dataUsers} key={item.idusuario}/>  
          )}
        />
        :
        <Dashboard result="center_message" componetContent={<h1 className='title_admin'>No se encontraron resultados</h1>}/>
      
    }
      <PopupConfirmChanges objectContent={
        selectedList?.map(item=>(
          <ObjectStatus userSelect={item} deletingSelectedDeslectCheckbox={deletingSelectedDeslectCheckbox} key={item.id}/>
        ))
      } dataPopupConfirmChanges={dataPopupConfirmChanges}/>
      </div>
    </div>
  )
}