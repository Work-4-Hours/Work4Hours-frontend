import { PopUpOptions } from 'Components/StyleComponets/PopupOptions';
import React,{useState} from 'react'
import './StatusUsersAdmin.css'

export const StatusUsersAdmin = () => {
  const [stateUser, setStateUser]=useState("Habilitado");
  const [isOpen, setIsOpen] = useState(false);
  const [stateColor, setStateColor]=useState('green');
  const [display, setDisplay]=useState('none');

  const changeStateUsers=(event)=>{
    setStateUser(event.target.textContent)
    setIsOpen(!isOpen)
    setStateColor(event.target.classList[2])
  }

  return (
    <div className='position_relative fieldSize8'>
      <p className={'op_state_user ' + stateColor} onClick={()=>{setIsOpen(!isOpen); setDisplay('block')}}>{stateUser}</p>
      <PopUpOptions className='content_options' isOpen={isOpen} visibilidad={display}>
        <h5 className='spacing'>Estados del usuario</h5>
        <p className='op_state_user spacing green ' onClick={event=>changeStateUsers(event)}>Habilitado</p>
        <p className='op_state_user spacing yellow' onClick={event=>changeStateUsers(event)}>Suspendido 3 dias</p>
        <p className='op_state_user spacing red' onClick={event=>changeStateUsers(event)}>Inhabilitado</p>
      </PopUpOptions>
    </div>
  )
}