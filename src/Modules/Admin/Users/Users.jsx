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

export const Users = () => {
  const { admin, logoutAdmin, getToken, sendNotification } = useContext(AdminContext)
  const [usersData,setUsersData]=useState([]);
  const [stateData,setStateData]=useState([]);
  const [idFilter, setIdFilter] = useState('');


  const dataUsers = GetAdmin('Users');
  const dataState= GetAdmin('State');
  
  useEffect(()=> {
    if(dataUsers.loading === false) {
      setUsersData(dataUsers.data);
    }
  },[dataUsers.loading])

  useEffect(()=> {
    if(dataState.loading === false) {
      setStateData(dataState.data);
    }
  },[dataState.loading])

  const [listUsersSelect, setListUserSelect]=useState([]);
  const [searchUsersWord,setSearchUsersWord]=useState([]);
  const [validateSearchUserWord,setValidateSearchUserWord]=useState(true);

  useEffect(()=>{
    if(searchUsersWord.length>0){
      setUsersData(searchUsersWord)
    }
    else{
      setUsersData(dataUsers.data)
    }
  },[searchUsersWord])

  const deleteUserSelect =(id)=>{
    listUsersSelect.map(item=>{
      if(item.idUsuario===id){
        const index=listUsersSelect.indexOf(item);
        listUsersSelect.splice(index,1)
      }
    })
    setListUserSelect([...listUsersSelect]);
  }

  const dataMenuAdmin = {
    logout: logoutAdmin,
    nameAdmin: "Usuarios",
    buttonActivated: " ",
    buttonDeactivated: " btn_change_color_gray",

  }

  const dataSearch = {
    nameSearch: "Buscar Usuarios",
    wordSearchSet: setSearchUsersWord,
    setValidateSearchUserWord: setValidateSearchUserWord,
    idFilter: idFilter,
    filter: <FilterUserAdmin setIdFilter={setIdFilter} />
  }

  const dataDashboarHeader = {
    columWidth1:'fieldSize3 ', 
    columWidth2:'fieldSize20 ',
    columWidth3:'fieldSize20 ',
    columWidth4:'fieldSize17 ',
    columWidth5:'fieldSize8 ',
    columWidth6:'fieldSize13 ', 
    columWidth7:'fieldSize8 ',
    columText1:"Perfil",
    columText2:"Apellidos",
    columText3:"Nombres",
    columText4:"Correo",
    columText5:"Reportes",
    columText6:"Estado Usuario",
    columText7:"Conf. cambios",
    colorTituleReport:" "
  }

  return (
    <div className='container_admin'>
      <MenuAdmin dataMenuAdmin={dataMenuAdmin} />
      <div className='manager_control'>
      <Search dataSearch={dataSearch} />
      <DashboardHeader dataDashboarHeader={dataDashboarHeader}/>
        {validateSearchUserWord ? 
          <Dashboard componetContent={
            usersData?.map(item=>
              <UserInfo deleteUserSelect={deleteUserSelect} objectAllUsers={item} objectAllStatus={stateData} listUserSelectSet={setListUserSelect} selectUsers={listUsersSelect} key={item.idusuario}/>
            ) }/>
          :
          <Dashboard style="center_message" componetContent={<h1 className='title_admin'>No se encontraron resultados</h1>}/>}

        <PopupConfirmChanges infoAdmin={admin} token={getToken()} sendNotification={sendNotification} listUsersSelect={listUsersSelect} objectContent={
          listUsersSelect.map(item=>
        <ObjectStatus userSelect={item} deleteUserSelect={deleteUserSelect} key={item.idUsuario}/> )} nameTitle={"Esta seguro de querer actualizar el estado de: "} valueButton={"Actualizar"}  styleObjects={"popup_confirm_changes_content_objects_users"}/>
      </div>
    </div>
  )
}