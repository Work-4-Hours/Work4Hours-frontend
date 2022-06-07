import React,{useState} from 'react';

import { Button } from '../Button/Button';
import { PopUp } from 'Components/StyleComponets/PopUp';
import { CheckBoxAdmin } from '../CheckBoxAdmin/CheckBoxAdmin';
import { SelectTypeServiceAdmin } from '../SelectTypeServiceAdmin/SelectTypeServiceAdmin';
import { OptionFilterUserAdmin } from '../OptionFilterUserAdmin/OptionFilterUserAdmin';

export const FilterServiceAdmin = ({setIdFilter}) => {
    const [isOpen, setIsOpen] = useState(false);
    const data=[
      {nombre:"Reportes",id:1},
      {nombre:"Nombre del servicio",id:2},
      {nombre:"Tipo",id:3}
    ]
  return (
    <div className='content_filter'>
        <Button className="button btn_search_filter_admin_users" value={"Filtro"} onClick={()=>{setIsOpen(!isOpen)}}/>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options filter_options'>
            {data.map(item=><OptionFilterUserAdmin option={item} setIdFilter={setIdFilter} key={item.id}/>)}
        </div>
      </PopUp>
    </div>
  )
}
