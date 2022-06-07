import { Button } from 'Components/Ui/Button/Button';
import { LinkOption } from 'Components/Ui/LinkOption/LinkOption';
import { TitleAdmin } from 'Components/Ui/TitleAdmin/TitleAdmin';
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';


import './MenuAdmin.css';

export const MenuAdmin = ({dataMenuAdmin}) => {
  const {logoutAdmin, nameAdmin, buttonActivated, buttonDeactivated}=dataMenuAdmin;
  const navigate = useNavigate()
  const logoutApp = () => {
    logoutAdmin();
    navigate('/');
  }

  return (
    <div className='menu_admin'>
      <div>
        <TitleAdmin typeAdmin={nameAdmin}/>
        <div className='btns_menu_admin'>
          <Link to="/AdminUsers" className='text_decoration_none'><Button className={"button btn_with_admin "+ buttonActivated} value={"Usuarios"}/></Link>
          <Link to="/AdminServices" className='text_decoration_none'><Button className={"button btn_with_admin "+ buttonDeactivated} value={"Servicios"}/></Link>
        </div>
      </div>
      <Button className="button btn_change_color_gray btn_with_admin" value={"Cerrar Sesión"} onClick={logoutApp}/>
    </div> 
  )
}
