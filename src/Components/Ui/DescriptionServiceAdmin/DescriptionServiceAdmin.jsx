import React, {useState} from 'react'
import'./DescriptionServiceAdmin.css'

import { PopUpOptions } from 'Components/StyleComponets/PopupOptions';

export const DescriptionServiceAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [display, setDisplay]=useState('none');
    
  return (
    <div className='fieldSize21 position_relative'>
      <p className="ellipsis count_reports" onClick={()=>{setIsOpen(!isOpen); setDisplay('block')}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam sit exercitationem minus dolorum, aspernatur, ullam voluptate voluptates labore nam minima quae eos neque ipsum. Beatae ad eos similique veniam.</p>
      <PopUpOptions className='content_description' isOpen={isOpen} visibilidad={display}>
        <h5 className='spacing title_popup_description'>Descripción</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam sit exercitationem minus dolorum, aspernatur, ullam voluptate voluptates labore nam minima quae eos neque ipsum. Beatae ad eos similique veniam.</p>
      </PopUpOptions>
    </div>
  )
}
