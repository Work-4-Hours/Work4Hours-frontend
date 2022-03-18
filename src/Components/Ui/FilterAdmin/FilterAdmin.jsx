import { PopUp } from 'Components/StyleComponets/PopUp';
import React, {useState, useEffect} from 'react'
import { Button } from '../Button/Button';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import './FilterAdmin.css'

export const FilterAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stateColor, setStateColor] = useState('');
  const [count, setCount] = useState(0);

  const color_state=[ "grey" , "green", "yellow", "red"];

  useEffect(() => {
    setStateColor(color_state[count]);
    if(count==4){
      setCount(0)
    }
  }, [count])
  

  return (
    <div className='position_relative content_filter'>
        <Button className=" button btn_search_filter_admin_users" value={"Filtro"} onClick={()=>setIsOpen(!isOpen)}/>
      <PopUp className='content_options filter_options' isOpen={isOpen} > 
      <div className="typ_report spacing spacing_type_suspension">
        <p>Tipos de suspensión</p><p className={'color_state_user ' + stateColor} onClick={()=>setCount(count+1) }></p>
      </div>
        <div className="typ_report spacing">
          <p>Reportes</p><CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"}/>
        </div>
        <div className="typ_report spacing">
          <p>Correo</p><CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"}/>
        </div>
        <div className="typ_report spacing">
          <p>Nombres y Apellidos</p><CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"}/>
        </div>
      </PopUp>
    </div>
  )
}