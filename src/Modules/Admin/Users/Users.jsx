import React, { useState, useEffect, useContext} from 'react';
import './Users.css';

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

  const [isOpen, setIsOpen] = useState(false);
  const { admin, logoutAdmin, getToken, sendNotification } = useContext(AdminContext);
    
  const { 
    data,
    setData,
    getAdmin, 
    dataState, 
    getAdminReports,
    dataReport,
    deletingSelectedDeslectCheckbox,
    // closePopUpAndDeleteSelectedDeslectCheckBox, 
    objectSelectedSetState, 
    selectedList, 
    setselectedList, 
    changeStatus,
    setChangeStatus,
    postWorkSearch,
    searchWord,
    validateSearchWord,
    changeFilteringOptionId,
    unSelect,
    nameFilter, 
    setNameFilter
    // isOpen,
    // setIsOpen
} = useAdmin();


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
    searchString:"SearchUsers",
    nameFilter:nameFilter,
    setNameFilter:setNameFilter
  }

  const dataFilter={
    changeFilteringOptionId:changeFilteringOptionId,
    unSelect:unSelect,
    data:[
      {nombre:"Tipo de Suspensión",id:1},
      {nombre:"Reportes",id:2},
      {nombre:"Correo",id:3},
      {nombre:"Nombres y Apellidos",id:4}
    ],
    setNameFilter: setNameFilter
  }

  const dataUsers={
    objectAllStatus:dataState,
    getAdminReports:getAdminReports,
    deletingSelectedDeslectCheckbox: deletingSelectedDeslectCheckbox,
    dataReport:dataReport,
    objectSelectedSetState:objectSelectedSetState, 
    selectedList:selectedList, 
    setselectedList:setselectedList, 
    changeStatus:changeStatus,
    setChangeStatus:setChangeStatus
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
    getAdmin:getAdmin,
    setData:setData,
    selectedList:selectedList, 
    setselectedList: setselectedList,
    valueButton:"Actualizar",
    token:getToken(),
    email:admin.info[0].email,
    typePetition:"Users",
    typeAdmin: "usuario", 
    isOpen: isOpen,
    setIsOpen: setIsOpen
    //sendNotification
  }

  const dataObjectStatus = {
    deletingSelectedDeslectCheckbox:deletingSelectedDeslectCheckbox,
    selectedList: selectedList,
    isOpen:isOpen,
    setIsOpen:setIsOpen
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
          <ObjectStatus userSelect={item} dataObjectStatus={dataObjectStatus} key={item.id}/>
        ))
      } dataPopupConfirmChanges={dataPopupConfirmChanges}/>
      </div>
    </div>
  )
}