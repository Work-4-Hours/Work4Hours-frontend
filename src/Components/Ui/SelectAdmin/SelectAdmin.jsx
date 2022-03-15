import { PopUp } from 'Components/StyleComponets/PopUp';
import {React,useState} from 'react'
import './SelectAdmin.css'



export const SelectAdmin = () => {

  const [stateUser, setStateUser]=useState("Habilitado");
  const [isOpen, setIsOpen] = useState(false)

  const changeStateUsers=(event)=>{
    setStateUser(event.target.textContent)
    setIsOpen(!isOpen)
  }

  // const closePopUp=()=>{
  //   setIsOpen(true)
  // }
  
  return (
    <div className='cb_state_user' >
      <p className='op_state_user_initial green' onClick={event=>setIsOpen(!isOpen)}>{stateUser}</p>
      <PopUp className='content_options' isOpen={isOpen} >
        <h5 className='spacing'>Estados del usuario</h5>
        <p className='op_state_user spacing green' onClick={event=>changeStateUsers(event)}>ㅤHabilitado</p>
        <p className='op_state_user spacing yellow' onClick={event=>changeStateUsers(event)}>ㅤSuspendido 3 dias</p>
        <p className='op_state_user spacing red' onClick={event=>changeStateUsers(event)}>ㅤInhabilitado</p>
      </PopUp>

    </div>
  )
}
