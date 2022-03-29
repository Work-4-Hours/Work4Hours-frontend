import React, {useState, useEffect} from 'react';
import './FilterUserAdmin.css';


import { PopUp } from 'Components/StyleComponets/PopUp';
import { Button } from '../Button/Button';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';

export const FilterUserAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stateColor, setStateColor] = useState('');
  const [count, setCount] = useState(0);
  const [display, setDisplay]=useState('none');

  const color_state=[ "grey" , "green", "yellow", "red"];

  useEffect(() => {
    setStateColor(color_state[count]);
    if(count==4){
      setCount(0)
    }
  }, [count])
  

  return (
    <div className='content_filter'>
        <Button className="button btn_search_filter_admin_users" value={"Filtro"} onClick={()=>{setIsOpen(!isOpen); setDisplay('block')}}/>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen); setDisplay('block')}}></div>
        <div className='content_options filter_options'>
          <div className="typ_report spacing_type_suspension">
              <p>Tipos de suspensión</p><p className={'color_state_user ' + stateColor} onClick={()=>setCount(count+1) }></p>
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