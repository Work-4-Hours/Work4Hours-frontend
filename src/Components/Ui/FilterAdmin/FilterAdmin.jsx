import { PopUp } from 'Components/StyleComponets/PopUp';
import {React,useState} from 'react'
import { Button } from '../Button/Button';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';



export const FilterAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='position_relative btn_search-filter_admin_users' >
        <Button className=" button" value={"Filtro"} onClick={event=>setIsOpen(!isOpen)}/>
      <PopUp className='content_options' isOpen={isOpen} > 
        <p className='spacing'>Tipos de suspención</p>
        <div className="typ_report spacing">
          <p>Reportes</p><CheckBoxAdmin/>
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
