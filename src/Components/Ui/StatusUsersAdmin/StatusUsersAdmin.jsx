import { PopUp } from 'Components/StyleComponets/PopUp';
import React,{useState} from 'react'
import './StatusUsersAdmin.css'

export const StatusUsersAdmin = () => {
  const [stateUser, setStateUser]=useState("Habilitado");
  const [isOpen, setIsOpen] = useState(false);
  const [stateColor, setStateColor]=useState('green');

  const changeStateUsers=(event)=>{
    setStateUser(event.target.textContent)
    setIsOpen(!isOpen)
    setStateColor(event.target.id)
  }

  return (
    <div className='position_relative fieldSize8'>
      <p className={'op_text_state_users ' + stateColor} onClick={()=>{setIsOpen(!isOpen)}}>{stateUser}</p>
      <PopUp isOpen={isOpen}>
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options'>
          <h5 className='spacing'>Estados del usuario</h5>
          <p className='op_state_user spacing state_1 field105px' id="green" onClick={event=>changeStateUsers(event)}>Habilitado</p>
          <p className='op_state_user spacing state_2 field160px' id="yellow" onClick={event=>changeStateUsers(event)}>Suspendido 3 dias</p>
          <p className='op_state_user spacing state_3 field116px' id="red" onClick={event=>changeStateUsers(event)}>Inhabilitado</p>
        </div>
      </PopUp>
    </div>
  )
}