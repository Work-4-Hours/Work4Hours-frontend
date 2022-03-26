import React, {useState} from 'react'

import { PopUpOptions } from 'Components/StyleComponets/PopupOptions';

export const MessageUserAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [display, setDisplay]=useState('none');
    
  return (
    <div className='position_relative fieldSize8'>
      <p onClick={()=>{setIsOpen(!isOpen); setDisplay('block')}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam sit exercitationem minus dolorum, aspernatur, ullam voluptate voluptates labore nam minima quae eos neque ipsum. Beatae ad eos similique veniam.</p>
      <PopUpOptions className='content_options' isOpen={isOpen} visibilidad={display}>
        <h5 className='spacing'>Mensaje</h5>
        <p className='op_state_user spacing green '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam sit exercitationem minus dolorum, aspernatur, ullam voluptate voluptates labore nam minima quae eos neque ipsum. Beatae ad eos similique veniam.</p>
      </PopUpOptions>
    </div>
  )
}
