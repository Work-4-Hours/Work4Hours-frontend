import { PopUp } from 'Components/StyleComponets/PopUp';
import {React,useState} from 'react'
import { Button } from '../Button/Button';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import './FilterAdmin.css'



export const FilterAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='position_relative content_filter' >
        <Button className=" button btn_search_filter_admin_users" value={"Filtro"} onClick={event=>setIsOpen(!isOpen)}/>
      <PopUp className='content_options filter_options' isOpen={isOpen} > 
        <p className='spacing'>Tipos de suspención</p>
        <div className="typ_report spacing">
          <p>Reportes</p><CheckBoxAdmin className="checkbox_filter"/>
        </div>
        <div className="typ_report spacing">
          <p>Correo</p><CheckBoxAdmin/>
        </div>
        <div className="typ_report spacing">
          <p>Nombres y Apellidos</p><CheckBoxAdmin/>
        </div>
      </PopUp>
    </div>
  )
}
