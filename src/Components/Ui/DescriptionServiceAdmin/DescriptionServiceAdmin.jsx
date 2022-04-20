import React, {useState} from 'react';
import'./DescriptionServiceAdmin.css';

import { PopUp } from 'Components/StyleComponets/PopUp';


export const DescriptionServiceAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div className='fieldSize15 position_relative'>
      <p className="ellipsis pointer_userSelect_none" onClick={()=>{setIsOpen(!isOpen)}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam sit exercitationem minus dolorum, aspernatur, ullam voluptate voluptates labore nam minima quae eos neque ipsum. Beatae ad eos similique veniam.</p>
      <PopUp isOpen={isOpen}>
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_description'>
          <h5 className='spacing title_popup_description'>Descripción</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam sit exercitationem minus dolorum, aspernatur, ullam voluptate voluptates labore nam minima quae eos neque ipsum. Beatae ad eos similique veniam.</p>
        </div>
      </PopUp>
    </div>
  )
}
