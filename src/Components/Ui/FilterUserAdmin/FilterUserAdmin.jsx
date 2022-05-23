import React, {useState} from 'react';
import './FilterUserAdmin.css';

import { PopUp } from 'Components/StyleComponets/PopUp';
import { Button } from '../Button/Button';

export const FilterUserAdmin = ({setIdFilter}) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeValueSelected = (e) => {
    setIdFilter(e.target.value);
  }
  
  const unSelect = (e) => {
    return e.target.checked = false
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
            </label>
            <input type="radio" value="1" name ="filters" onDoubleClick={(e)=>unSelect(e)}/>
          </div>
          <div className='typ_report'>
            <label>
              Reportes
            </label>
            <input type="radio" value="2" name ="filters" onClick={(e)=>unSelect(e)}/>
          </div>
          <div className='typ_report'>
            <label>
              Correo
            </label>
            <input type="radio" value="3" name ="filters" onClick={(e)=>unSelect(e)}/>
          </div>
          <div className='typ_report'>
            <label>
              Nombres y Apellidos
            </label>
            <input type="radio" value="4" name ="filters" onClick={(e)=>unSelect(e)}/>
          </div>
        </div>
      </PopUp>
    </div>
  )
}