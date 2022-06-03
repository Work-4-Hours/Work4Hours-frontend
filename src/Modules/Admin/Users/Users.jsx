import React, { useEffect, useState,useContext } from 'react';
import './Users.css';

import { Dashboard } from 'Components/Layout/Dashboard/Dashboard';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader';
import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin';
import { PopupConfirmChanges } from 'Components/Layout/PopupConfirmChanges/PopupConfirmChanges';
import { Search } from 'Components/Layout/Search/Search';
import { UserInfo } from 'Components/Ui/UserInfo/UserInfo';
import { FilterUserAdmin } from 'Components/Ui/FilterUserAdmin/FilterUserAdmin';
import { ObjectStatus } from 'Components/Ui/ObjectStatus/ObjectStatus'
import { GetAdmin } from 'Functions/ReusableFunctions';
import { AdminContext } from 'Context/AdminContext';
import { useAdmin } from 'CustomHooks/useAdmin';


export const Users = () => {
    
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
    getAdmin('Users');
    getAdmin('State');
  },[])

  

  const dataMenuAdmin = {
    nameAdmin: "Usuarios",
    buttonActivated: " ",
    buttonDeactivated: " btn_change_color_gray"
  }

  const dataUsers={
    objectAllStatus:dataState,
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


  return (
    <div className='container_admin'>
      <MenuAdmin dataMenuAdmin={dataMenuAdmin} />
      <div className='manager_control'>
      <DashboardHeader dataDashboardHeader={dashboardHeader}/>
      <Dashboard componetContent={
        data?.map(item=>(
          <UserInfo objectAllUsers={item} dataUsers={dataUsers} key={item.idusuario}/>
        )
        ) }/>
      
      </div>

    </div>
  )
}