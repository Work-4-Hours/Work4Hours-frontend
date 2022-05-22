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
import { UserContext } from 'Context/UserContext';
import { AdminContext } from 'Context/AdminContext';


export const Users = () => {
  const { admin, logoutAdmin, getToken, sendNotification } = useContext(AdminContext)
  console.log(admin)
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
  console.log(listUsersSelect)
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

  return (
    <div className='container_admin'>
      <MenuAdmin logout={logoutAdmin} nameAdmin={"Usuarios"} btnActive={"button btn_with_admin"} btnInactive={"button btn_change_color_gray btn_with_admin"}/>
      <div className='manager_control'>
        <Search nameSearch={"Buscar Usuarios"} wordSearchSet={setSearchUsersWord} setValidateSearchUserWord={setValidateSearchUserWord} idFilter={idFilter} filter={<FilterUserAdmin setIdFilter = {setIdFilter}/>}/>
        <DashboardHeader space1={'fieldSize3 '} space2={'fieldSize20 '} space3={'fieldSize20 '} space4={'fieldSize17 '} space5={'fieldSize8 '} space6={'fieldSize13 '} space7={'fieldSize8 '} header1={"Perfil"} header2={"Apellidos"} header3={"Nombres"} header4={"Correo"} header5={"Reportes"} header6={"Estado Usuario"} header7={"Conf. cambios"} />
        {validateSearchUserWord ? 
          <Dashboard componetContent={
            usersData?.map(item=>
              <UserInfo deleteUserSelect={deleteUserSelect} objectAllUsers={item} objectAllStatus={stateData} listUserSelectSet={setListUserSelect} selectUsers={listUsersSelect} key={item.idusuario}/>
            ) }/>
          :
          <Dashboard style="center_message" componetContent={<h1 className='title_admin'>No se encontraron resultados</h1>}/>}

        <PopupConfirmChanges sendNotification={sendNotification} listUsersSelect={listUsersSelect} objectContent={
          listUsersSelect.map(item=>
        <ObjectStatus userSelect={item} deleteUserSelect={deleteUserSelect} key={item.idUsuario}/> )} nameTitle={"Esta seguro de querer actualizar el estado de: "} valueButton={"Actualizar"}  styleObjects={"popup_confirm_changes_content_objects_users"}/>
      </div>
    </div>
  )
}