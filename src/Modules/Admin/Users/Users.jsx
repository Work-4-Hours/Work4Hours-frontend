import { Dashboard } from 'Components/Layout/Dashboard/Dashboard';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader';
import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin';
import { Search } from 'Components/Layout/Search/Search';

import React from 'react';
import './Users.css'

export const Users = () => {
  return (
    <div className='users_menu_admin'>
      <MenuAdmin nameAdmin={"Usuarios"}/>
      <div className='users'>
        <Search nameSearch={"Buscar Usuarios"}/>
        <DashboardHeader/>
        <Dashboard/>
      </div>
    </div>
  )
}
