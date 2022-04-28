
import { PopUp } from 'Components/StyleComponets/PopUp';
import { GetAdmin } from 'Functions/ReusableFunctions';
import React,{useState, useEffect} from 'react'
import './StatusUsersAdmin.css'


export const StatusUsersAdmin = ({UserStatus, objectAllStates}) => {
  const [stateUser, setStateUser]=useState(UserStatus);
  const [isOpen, setIsOpen] = useState(false);
  const [stateColor, setStateColor]=useState('green');

  const changeStateUsers=(event)=>{
    setStateUser(event.target.textContent)
    setIsOpen(!isOpen)
    setStateColor(event.target.classList[2])
  }
  console.log(objectAllStates)
  
  return (
    <div className='position_relative fieldSize13'>
      <p className={'op_state_user ' + stateColor} onClick={()=>{setIsOpen(!isOpen)}}>{stateUser}</p>
      <PopUp isOpen={isOpen}>
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options'>
          <h5 className='spacing'>Estados del usuario</h5>
          <p className='op_state_user spacing green field105px' onClick={event=>changeStateUsers(event)}>Habilitado</p>
          <p className='op_state_user spacing yellow field160px' onClick={event=>changeStateUsers(event)}>Suspendido 3 dias</p>
          <p className='op_state_user spacing red field116px' onClick={event=>changeStateUsers(event)}>Inhabilitado</p>
        </div>
      </PopUp>
    </div>
  )
}