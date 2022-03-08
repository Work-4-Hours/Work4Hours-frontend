import { Dashboard } from 'Components/Layout/Dashboard/Dashboard';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader';
import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin';
import { Search } from 'Components/Layout/Search/Search';

import React from 'react';
import './Users.css'

export const Users = () => {
  return (
    <div>
      <MenuAdmin/>
      <Search/>
      <DashboardHeader/>
      <Dashboard/>
    </div>
  )
}