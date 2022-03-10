import { TitleAdmin } from 'Components/Ui/TitleAdmin/TitleAdmin';
import React from 'react';

import './MenuAdmin.css';

export const MenuAdmin = ({nameAdmin}) => {
  return (
    <div className='menu_admin'>
      <TitleAdmin typeAdmin={nameAdmin}/>
    </div> 
  )
}
