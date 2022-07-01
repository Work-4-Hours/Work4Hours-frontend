import React, {useState} from 'react';
import'./DescriptionServiceAdmin.css';

import { PopUp } from 'Components/StyledComponets/PopUp';


export const DescriptionServiceAdmin = ({textDescription}) => {
  const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div className='fieldSize15 position_relative hide'>
      <p className="ellipsis pointer_userSelect_none" onClick={()=>{setIsOpen(!isOpen)}}>{textDescription}</p>
      <PopUp isOpen={isOpen}>
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_description'>
          <h5 className='spacing title_popup_description'>Descripción</h5>
          <p>{textDescription}</p>
        </div>
      </PopUp>
    </div>
  )
}
