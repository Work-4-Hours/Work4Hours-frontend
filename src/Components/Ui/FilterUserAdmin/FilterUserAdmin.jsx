import React, {useState} from 'react';
import './FilterUserAdmin.css';

import { PopUp } from 'Components/StyleComponets/PopUp';
import { Button } from '../Button/Button';

export const FilterUserAdmin = ({setIdFilter}) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeValueSelected = (e) => {
    setIdFilter(e.target.value);
  }
  
  return (
    <div className='content_filter'>
        <Button className="button btn_search_filter_admin_users" value={"Filtro"} onClick={()=>{setIsOpen(!isOpen)}}/>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options filter_options' onChange={changeValueSelected}>
          <div className='typ_report'>
            <label>
              Tipos de suspensión
              <input type="radio" value="1" name ="opcion1"/>
            </label>
          </div>
          <div>
            <label>
              Reportes
              <input type="radio" value="2" name ="opcion1"/>
            </label>
          </div>
          <div>
            <label>
              Correo
              <input type="radio" value="3" name ="opcion1"/>
            </label>
          </div>
          <div>
            <label>
              Nombres y Apellidos
              <input type="radio" value="4" name ="opcion1"/>
            </label>
          </div>
        </div>
      </PopUp>
    </div>
  )
}