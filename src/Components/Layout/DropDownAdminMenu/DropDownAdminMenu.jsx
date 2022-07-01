import { PopUp } from 'Components/StyledComponets/PopUp';
import { TitleAdmin } from 'Components/Ui/TitleAdmin/TitleAdmin';
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {HiMenu} from 'react-icons/hi'
import './DropDownAdminMenu.css'
import { BsX } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { BiLogOut } from 'react-icons/bi';
import { MdMiscellaneousServices } from 'react-icons/md';


export const DropDownAdminMenu = ({dataMenuAdmin}) => {
  const {nameAdmin, logoutAdmin}=dataMenuAdmin;

  const navigate = useNavigate()
  
  const logoutApp = () => {
    logoutAdmin();
    navigate('/');
  }
  const [isOpen, setIsOpen] = useState(false);
  return (

      <>
        <HiMenu className='icon_menu_admin' onClick={() => setIsOpen(!isOpen)}/>
        <PopUp isOpen={isOpen}>
        <div className='overlay' onClick={()=>{setIsOpen(!isOpen)}}></div>
          <div className='drop_down_menu_admin'>
            <div className='title_menu_admin'>
              <TitleAdmin typeAdmin={nameAdmin} />
              <BsX className='close_menu_admin' onClick={()=>{setIsOpen(!isOpen)}}/>
            </div>
            <div className='options_menu_admin_vertical'>
              <Link to="/AdminUsers" className='option_menu_admin_vertical text_decoration_none'>
                <FiUsers/>
                <label>Usuarios</label>
              </Link>
              <Link to="/AdminServices" className='option_menu_admin_vertical text_decoration_none'>
                <MdMiscellaneousServices/>
                <label>Servicios</label>
              </Link>
            </div>
            <div className='option_menu_admin_vertical ' onClick={logoutApp}>
              <BiLogOut/>
              <label>Cerrar Sesión</label>
            </div>
          </div>
        </PopUp>
      </> 


  )
}

