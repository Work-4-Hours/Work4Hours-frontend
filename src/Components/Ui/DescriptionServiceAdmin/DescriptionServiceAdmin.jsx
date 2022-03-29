import { PopUp } from 'Components/StyleComponets/PopUp';
import React, {useState} from 'react'
import'./DescriptionServiceAdmin.css'


export const DescriptionServiceAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [display, setDisplay]=useState('none');
    
  return (
    <div className='fieldSize21 position_relative'>
      <p className="ellipsis count_reports" onClick={()=>{setIsOpen(!isOpen); setDisplay('block')}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam sit exercitationem minus dolorum, aspernatur, ullam voluptate voluptates labore nam minima quae eos neque ipsum. Beatae ad eos similique veniam.</p>
      <PopUp isOpen={isOpen}>
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen); setDisplay('block')}}></div>
        <div className='content_description'>
        <h5 className='spacing title_popup_description'>Descripción</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam sit exercitationem minus dolorum, aspernatur, ullam voluptate voluptates labore nam minima quae eos neque ipsum. Beatae ad eos similique veniam.</p>
        </div>
      </PopUp>
    </div>
  )
}
