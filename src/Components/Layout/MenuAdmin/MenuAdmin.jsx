import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuAdmin.css';

import {VerticalAdminMenu} from '../VerticalAdminMenu/VerticalAdminMenu';
import { DropDownAdminMenu } from '../DropDownAdminMenu/DropDownAdminMenu';

export const MenuAdmin = ({dataMenuAdmin}) => {
  const{logoutAdmin}=dataMenuAdmin;
  
  const navigate = useNavigate()
  
  const logoutApp = () => {
    logoutAdmin();
    navigate('/');
  }

  return (
    <>
    <VerticalAdminMenu dataMenuAdmin={dataMenuAdmin} logoutApp={logoutApp}/>
    <DropDownAdminMenu dataMenuAdmin={dataMenuAdmin} logoutApp={logoutApp}/>
    </>
  )
}
