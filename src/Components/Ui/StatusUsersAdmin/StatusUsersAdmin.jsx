import { PopUp } from 'Components/StyleComponets/PopUp';
import {React,useState} from 'react'
import './StatusUsersAdmin.css'

export const StatusUsersAdmin = () => {
  const [stateUser, setStateUser]=useState("Habilitado");
  const [isOpen, setIsOpen] = useState(false);
  const [stateColor, setStateColor]=useState('green');

  const changeStateUsers=(event)=>{
    setStateUser(event.target.textContent)
    setIsOpen(!isOpen)
    setStateColor(event.target.classList[2])
  }

  // const closePopUp=()=>{
  //   setIsOpen(true)
  // }
  
  return (
    <div className='position_relative' >
      <p className={'op_state_user_initial ' + stateColor}  onClick={event=>setIsOpen(!isOpen)}>{stateUser}</p>
      <PopUp className='content_options' isOpen={isOpen} >
        <h5 className='spacing'>Estados del usuario</h5>
        <p className='op_state_user spacing green' onClick={event=>changeStateUsers(event)}>ㅤHabilitado</p>
        <p className='op_state_user spacing yellow' onClick={event=>changeStateUsers(event)}>ㅤSuspendido 3 dias</p>
        <p className='op_state_user spacing red' onClick={event=>changeStateUsers(event)}>ㅤInhabilitado</p>
      </PopUp>
    </div>
  )
}
