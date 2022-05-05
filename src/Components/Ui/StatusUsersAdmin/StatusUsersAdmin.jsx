import React,{useState, useEffect} from 'react';
import './StatusUsersAdmin.css';
import { PopUp } from 'Components/StyleComponets/PopUp';
import { OptionStatusUserAdmin } from '../OptionStatusUserAdmin/OptionStatusUserAdmin';

export const StatusUsersAdmin = ({UserStatus, data, capturarid}) => {
  const [stateUser, setStateUser]=useState(UserStatus);
  const [isOpen, setIsOpen] = useState(false);
  const [stateColor, setStateColor]=useState('');
  const [idStateUser, setIdStateUser]=useState('');

  const changeColorStateUsers= (UserState) =>{  
    if(UserState == "Habilitado"){
      return 'green';
    }
    else if (UserState == "Suspendido por 3 días"){
      return 'yellow';
    }
    else if (UserState == "Inhabilitado"){
      return 'red';
    }
  }
  useEffect(() => {
    setStateColor (changeColorStateUsers(stateUser))
  }, [''])
  
  const changeStateUsers=(event)=>{
    setStateUser(event.target.textContent)
    setIsOpen(!isOpen)
    setStateColor(event.target.classList[2])
    setIdStateUser(event.target.id)
  }
  useEffect(() => {
    capturarid(idStateUser);
    
  }, [idStateUser])

  return (
    <div className='position_relative fieldSize13'>
      <p className={'op_state_user ' + stateColor } id={idStateUser} onClick={()=>{setIsOpen(!isOpen)}}>{stateUser}</p>
      <PopUp isOpen={isOpen}>
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options'>
          <h5 className='spacing'>Estados del usuario</h5>
          {data?.map(item=>(<OptionStatusUserAdmin objectAllStatus={item} bringStatus={changeStateUsers} colorStatus={changeColorStateUsers} />))}
          
        </div>
      </PopUp>
    </div>
  )
}