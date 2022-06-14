import React,{useState} from 'react';

import { Button } from '../Button/Button';
import { PopUp } from 'Components/StyledComponets/PopUp';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { SelectTypeServiceAdmin } from '../SelectTypeServiceAdmin/SelectTypeServiceAdmin';

export const FilterServiceAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='content_filter'>
        <Button className="button btn_search_filter_admin_users" value={"Filtro"} onClick={()=>{setIsOpen(!isOpen)}}/>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options filter_options'>
            <div className="typ_report ">
              <p>Reportes</p><CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"}/>
            </div>
            <div className="typ_report ">
              <p>Nombre del servicio</p><CheckBoxAdmin designCheckBoxAdmin={"span_confirm_changes span_filter"}/>
            </div>
            <div className="typ_report ">
              <p>Tipo</p><SelectTypeServiceAdmin/>
            </div>
        </div>
      </PopUp>
    </div>
  )
}
