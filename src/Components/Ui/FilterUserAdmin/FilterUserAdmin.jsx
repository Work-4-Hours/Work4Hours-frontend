import React, {useEffect, useState} from 'react';
import './FilterUserAdmin.css';

import { PopUp } from 'Components/StyleComponets/PopUp';
import { Button } from '../Button/Button';
import { OptionFilterUserAdmin } from '../OptionFilterUserAdmin/OptionFilterUserAdmin';

export const FilterUserAdmin = ({setIdFilter}) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeValueSelected = (e) => {
    setIdFilter(e.target.id);
  }
  
  const data=[
    {nombre:"Tipo de Suspensión",id:1},
    {nombre:"Reportes",id:2},
    {nombre:"Correo",id:3},
    {nombre:"Nombres y Apellidos",id:4}
  ]

  return (
    <div className='content_filter'>
        <Button className="button btn_search_filter_admin_users" value={"Filtro"} onClick={()=>{setIsOpen(!isOpen)}}/>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options filter_options' onChange={changeValueSelected}> 
          {data.map(item=><OptionFilterUserAdmin option={item} setIdFilter={setIdFilter} key={item.id}/>)}
        </div>
      </PopUp>
    </div>
  )
}