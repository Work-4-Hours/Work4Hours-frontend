import { PopUp } from 'Components/StyleComponets/PopUp';
import React,{useState} from 'react';
import './SelectTypeServiceAdmin.css';
import { IoMdArrowDropdown } from 'react-icons/io';

export const SelectTypeServiceAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='position_relative select_option_type_service_initial' onClick={()=>{setIsOpen(!isOpen)}}>
        <a>Servicio</a>
        <IoMdArrowDropdown className='icon_select_option_type_service'/>
      </div>
      <PopUp isOpen={isOpen}>
        <div className='container_select_option_type_service' >
          <p className='select_option_type_service'>Oferta</p>
          <p className='select_option_type_service'>Demanda</p>
        </div>
      </PopUp>
    </div>
  )
}
