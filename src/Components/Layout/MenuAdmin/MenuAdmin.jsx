import { TitleAdmin } from 'Components/Ui/TitleAdmin/TitleAdmin';
import React from 'react';

import './MenuAdmin.css';

export const MenuAdmin = () => {
  return (
    <div className='menu_admin'>
      <div>
        <TitleAdmin typeAdmin={nameAdmin}/>
        <div className='btns_menu_admin'>
          <Link to="/AdminUsers" className='text_decoration_none'><Button className={btnActive} value={"Usuarios"}/></Link>
          <Link to="/AdminServices" className='text_decoration_none'><Button className={btnInactive} value={"Servicios"}/></Link>
        </div>
      </div>
      <Link to="/" className='text_decoration_none'><Button className="button btn_change_color_gray btn_with_admin" value={"Cerrar Sesión"}/></Link>
      
    </div> 
  )
}
