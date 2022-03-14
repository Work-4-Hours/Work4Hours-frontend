import { Button } from 'Components/Ui/Button/Button';
import { TitleAdmin } from 'Components/Ui/TitleAdmin/TitleAdmin';
import React from 'react';
import { Link } from 'react-router-dom';



import './MenuAdmin.css';

export const MenuAdmin = ({nameAdmin}) => {
  return (
    <div className='menu_admin'>
      <TitleAdmin typeAdmin={nameAdmin}/>
      <div className='btns_menu_admin'>
        <Link to="/AdminUsers"><Button className="button btn_with_admin" value={"Usuarios"}/></Link>
        <Link to="/AdminServices"><Button className="button btn_change_color_gray btn_with_admin" value={"Servicios"}/></Link>
      </div>
      <div className='btn_log_out_admin'>
      <Link to="/"><Button className="button btn_change_color_gray btn_with_admin" value={"Cerrar Sesión"}/></Link>
      </div>
    </div> 
  )
}
