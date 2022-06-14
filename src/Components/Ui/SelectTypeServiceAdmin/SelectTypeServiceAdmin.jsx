import { PopUp } from 'Components/StyledComponets/PopUp';
import React,{useState} from 'react';
import './SelectTypeServiceAdmin.css';
import { IoMdArrowDropdown } from 'react-icons/io';

export const SelectTypeServiceAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [typeServices, setTypeServices]= useState("Servicio")


  
  const changeTypeServices=(event)=>{
    setTypeServices(event.target.textContent)
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className='position_relative select_option_type_service_initial' onClick={()=>{setIsOpen(!isOpen)}}>
        <a>{typeServices}</a>
        <IoMdArrowDropdown className='icon_select_option_type_service'/>
      </div>
      <PopUp isOpen={isOpen}>
        <div className='container_select_option_type_service' >
          <p className='select_option_type_service' onClick={(event)=>{changeTypeServices(event)}}>Oferta</p>
          <p className='select_option_type_service'onClick={(event)=>{changeTypeServices(event)}}>Demanda</p>
        </div>
      </PopUp>
    </div>
  )
}
