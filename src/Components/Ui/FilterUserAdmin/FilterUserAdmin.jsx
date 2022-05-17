import React, {useState} from 'react';
import './FilterUserAdmin.css';

import { PopUp } from 'Components/StyleComponets/PopUp';
import { Button } from '../Button/Button';
import { CheckBoxFilterAdmin } from '../CheckBoxFilterAdmin/CheckBoxFilterAdmin';

export const FilterUserAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className='content_filter'>
        <Button className="button btn_search_filter_admin_users" value={"Filtro"} onClick={()=>{setIsOpen(!isOpen)}}/>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options filter_options'>
          <div className="typ_report">
            <p>Tipos de suspensión</p><CheckBoxFilterAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"} id={1} />
          </div>
          <div className="typ_report ">
            <p>Reportes</p><CheckBoxFilterAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"} id={2} />
          </div>
          <div className="typ_report ">
            <p>Correo</p><CheckBoxFilterAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"} id={3} />
          </div>
          <div className="typ_report ">
            <p>Nombres y Apellidos</p><CheckBoxFilterAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"} id={4} />
          </div>
        </div>
      </PopUp>
    </div>
  )
}