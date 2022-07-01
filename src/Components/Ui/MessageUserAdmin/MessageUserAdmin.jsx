import React, {useState} from 'react';
import { PopUp } from 'Components/StyledComponets/PopUp';

export const MessageUserAdmin = ({textMessage}) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fieldSize15 position_relative hide'>
      <p className="ellipsis pointer_userSelect_none" onClick={()=>{setIsOpen(!isOpen)}}>{textMessage} </p>
      <PopUp isOpen={isOpen}>
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_description'>
          <h5 className='spacing title_popup_description'>Mensaje</h5>
          <p> {textMessage}</p>
        </div>
      </PopUp>
    </div>
  )
}
