import React,{useState,useEffect} from 'react';
import './Users.css';

import { Dashboard } from 'Components/Layout/Dashboard/Dashboard';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader';
import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin';
import { PopupConfirmChanges } from 'Components/Layout/PopupConfirmChanges/PopupConfirmChanges';
import { Search } from 'Components/Layout/Search/Search';
import { UserInfo } from 'Components/Ui/UserInfo/UserInfo';
import { FilterUserAdmin } from 'Components/Ui/FilterUserAdmin/FilterUserAdmin';
import { ObjectStatus } from 'Components/Ui/ObjectStatus/ObjectStatus'
import axios from 'axios';
import { GetAdmin } from 'Functions/ReusableFunctions';


export const Users = () => {
  // const [AllU, setAllU]=useState([]);

  //   const UserAlls =()=>{
  //       axios.get('https://localhost:44342/api/Users')
  //       .then(function (response) {
  //       setAllU(response.data);
  //       })
  //       .catch(function (error) {
        
  //       console.log(error);
  //       })
  //   }

  // const getAllUsers = async(url) => {
  //   await  
  // }
  // console.log(GetAdmin('Users'));

  const { data, loading } = GetAdmin('Users');
 
  // useEffect(() =>{
  //     console.log(GetAdmin('Users'));
  //     setAllU(GetAdmin("Users"))
  //   },[''])

  useEffect(()=> {
    if(loading === false) {
      console.log(data);
    }
  },[loading])

  return (
    <div className='container_admin'>
      <MenuAdmin nameAdmin={"Usuarios"} btnActive={"button btn_with_admin"} btnInactive={"button btn_change_color_gray btn_with_admin"}/>
      <div className='manager_control'>
        <Search nameSearch={"Buscar Usuarios"} filter={<FilterUserAdmin/>}/>
        <DashboardHeader space1={'fieldSize3 '} space2={'fieldSize20 '} space3={'fieldSize20 '} space4={'fieldSize17 '} space5={'fieldSize8 '} space6={'fieldSize13 '} space7={'fieldSize8 '} header1={"Perfil"} header2={"Apellidos"} header3={"Nombres"} header4={"Correo"} header5={"Reportes"} header6={"Estado Usuario"} header7={"Conf. cambios"} />
        <Dashboard componetContent={
          data?.map(item=>
            <UserInfo objectAllU={item}/>
          ) }/>
        <PopupConfirmChanges nameTitle={"Esta seguro de querer actualizar el estado de: "} valueButton={"Actualizar"} objectContent={<ObjectStatus/>} styleObjects={"popup_confirm_changes_content_objects_users"}/>
      </div>
    </div>
  )
}