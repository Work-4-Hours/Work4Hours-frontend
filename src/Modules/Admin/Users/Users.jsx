import React, { useEffect, useState,useContext } from 'react';
import './Users.css';

import { Dashboard } from 'Components/Layout/Dashboard/Dashboard';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader';
import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin';
import { Search } from 'Components/Layout/Search/Search';
import { UserInfo } from 'Components/Ui/UserInfo/UserInfo';

import { ObjectStatus } from 'Components/Ui/ObjectStatus/ObjectStatus';
import { AdminContext } from 'Context/AdminContext';
import { useAdmin } from 'CustomHooks/useAdmin';
import {PopupConfirmChanges} from '../../../Components/Layout/PopupConfirmChanges/PopupConfirmChanges';


export const Users = () => {

  const { admin, logoutAdmin, getToken, sendNotification } = useContext(AdminContext)
    
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


    
  const [id, setId] = useState(0);
  
  useEffect(()=>{
    getAdmin('Users');
    getAdmin('State');
  },[])  

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
    nameSearch: "Buscar Usuarios",
    postWorkSearch:postWorkSearch,
    searchNumber:"generalSearchReports",
    searchString:"SearchUsers"
  }


  const dataFilter={
    changeFilteringOptionId:changeFilteringOptionId,
    unSelect:unSelect,
    data:[
      {nombre:"Tipo de Suspensión",id:1},
      {nombre:"Reportes",id:2},
      {nombre:"Correo",id:3},
      {nombre:"Nombres y Apellidos",id:4}
    ]
  }

  const dataUsers={
    objectAllStatus:dataState,
    getAdminReports:getAdminReports,
    dataReport:dataReport,
    id:id,
    setId:setId,
    typeReport:"ReportsUsers",
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
    selectedList:selectedList, 
    nameTitle:"Esta seguro de querer actualizar el estado de: ",
    valueButton:"Actualizar",
    token:getToken(),
    email:admin.info[0].email,
    typePetition:"Users"
    //sendNotification
  }



  return (
    <div className='container_admin'>
      <MenuAdmin dataMenuAdmin={dataMenuAdmin} />
      <div className='manager_control'>
      <Search dataSearch={dataSearch} dataFilter={dataFilter}/>
      <DashboardHeader dataDashboardHeader={dashboardHeader}/>
      {validateSearchWord ?
        <Dashboard componetContent={
          data?.map(item=>(
            <UserInfo objectAllUsers={item} dataUsers={dataUsers} key={item.idusuario}/>
          ))}
        />
        :
        <Dashboard style="center_message" componetContent={<h1 className='title_admin'>No se encontraron resultados</h1>}/>
      
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