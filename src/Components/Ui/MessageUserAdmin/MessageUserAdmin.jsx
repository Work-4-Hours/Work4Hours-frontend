import React, {useState} from 'react'
import'./MessageUserAdmin.css'

import { PopUpOptions } from 'Components/StyleComponets/PopupOptions';

export const MessageUserAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [display, setDisplay]=useState('none');
    
  return (
    <div className='fieldSize8'>
      <p className='position_relative' onClick={()=>{setIsOpen(!isOpen); setDisplay('block')}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam sit exercitationem minus dolorum, aspernatur, ullam voluptate voluptates labore nam minima quae eos neque ipsum. Beatae ad eos similique veniam.</p>
      <PopUpOptions className='content_description' isOpen={isOpen} visibilidad={display}>
        <h5 className='spacing title_popup_description'>Mensaje</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam sit exercitationem minus dolorum, aspernatur, ullam voluptate voluptates labore nam minima quae eos neque ipsum. Beatae ad eos similique veniam.</p>
      </PopUpOptions>
    </div>
  )
}
