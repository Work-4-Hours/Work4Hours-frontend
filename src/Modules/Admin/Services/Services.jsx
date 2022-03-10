import React from 'react';
import './Services.css';

import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin.jsx';
import { Search } from 'Components/Layout/Search/Search.jsx';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader.jsx';
import { Dashboard } from 'Components/Layout/Dashboard/Dashboard.jsx';

export const Services = () => {
  return (
    <div className='users_menu_admin'>
      <MenuAdmin nameAdmin={"Servicios"}/>
      <div className='users'>
        <Search nameSearch={"Buscar Servicios"}/>
        <DashboardHeader/>
        <Dashboard/>
      </div>
    </div>
  )
}