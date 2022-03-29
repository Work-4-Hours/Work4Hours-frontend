import { PopUp } from 'Components/StyleComponets/PopUp';
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
      <PopUp isOpen={isOpen}>
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen); setDisplay('block')}}></div>
        <div className='content_options'>
        <h5 className='spacing'>Estados del usuario</h5>
        <p className='op_state_user spacing green ' onClick={event=>changeStateUsers(event)}>Habilitado</p>
        <p className='op_state_user spacing yellow' onClick={event=>changeStateUsers(event)}>Suspendido 3 dias</p>
        <p className='op_state_user spacing red' onClick={event=>changeStateUsers(event)}>Inhabilitado</p>
        </div>
      </PopUp>
    </div>
  )
}