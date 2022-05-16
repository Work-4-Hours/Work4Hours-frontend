import React, {useState, useEffect} from 'react';
import './FilterUserAdmin.css';

import { PopUp } from 'Components/StyleComponets/PopUp';
import { Button } from '../Button/Button';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';

export const FilterUserAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='content_filter'>
        <Button className="button btn_search_filter_admin_users" value={"Filtro"} onClick={()=>{setIsOpen(!isOpen)}}/>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options filter_options'>
          <div className="typ_report">
              <p>Tipos de suspensión</p><CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"}/>
            </div>
            <div className="typ_report ">
              <p>Reportes</p><CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"}/>
            </div>
            <div className="typ_report ">
              <p>Correo</p><CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"}/>
            </div>
            <div className="typ_report ">
              <p>Nombres y Apellidos</p><CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"}/>
            </div>
        </div>
      </PopUp>
    </div>
  )
}