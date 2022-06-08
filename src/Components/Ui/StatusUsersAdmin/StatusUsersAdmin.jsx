import React,{useState, useEffect} from 'react';
import './StatusUsersAdmin.css';
import { PopUp } from 'Components/StyledComponets/PopUp';
import { OptionStatusUserAdmin } from '../OptionStatusUserAdmin/OptionStatusUserAdmin';


export const StatusUsersAdmin = ({userSelectListSelectSetStatus,idUsuario,statusChange,statusChangeSet,userStatus,idUserStatus, data, capturarid, NumberReports}) => {
  const [stateUser, setStateUser]=useState(userStatus);
  const [isOpen, setIsOpen] = useState(false);
  const [stateColor, setStateColor]=useState('');
  const [idStateUser, setIdStateUser]=useState(idUserStatus);
  const [idUser, setIdUser]=useState(idUsuario);

  const changeState = (reportsNumber) => {
    if(reportsNumber === 25){
      setStateUser("Suspendido por 3 días")
      setIdStateUser(2)
    }
    else if(reportsNumber === 50){
      setStateUser("Inhabilitado")
      setIdStateUser(3)
    }
  }

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
  })
  
  useEffect(() =>{
    changeState(NumberReports)
},[''])

  const changeStateUsers=(event)=>{
    setStateUser(event.target.textContent)
    setIsOpen(!isOpen)
    setStateColor(event.target.classList[2])
    setIdStateUser(parseInt(event.target.id))
    statusChangeSet(!statusChange)
  }
  useEffect(()=>{
    userSelectListSelectSetStatus(statusChange, idUser, idStateUser)
  },[statusChange])
  useEffect(() => {
    capturarid(idStateUser);
  }, [idStateUser])

  return (
    <div className='position_relative fieldSize13'>
      <p className={'op_state_user ' + stateColor } id={idStateUser}  onClick={()=>{setIsOpen(!isOpen)}}>{stateUser}</p>
      <PopUp isOpen={isOpen}>
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options'>
          <h5 className='spacing'>Estados del usuario</h5>
          {data?.map(item=>(<OptionStatusUserAdmin objectAllStatus={item} bringStatus={changeStateUsers} colorStatus={changeColorStateUsers} key={item.id} />))}
        </div>
      </PopUp>
    </div>
  )
}