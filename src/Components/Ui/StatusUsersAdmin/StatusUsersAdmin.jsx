import React,{useState, useEffect} from 'react';
import './StatusUsersAdmin.css';
import { PopUp } from 'Components/StyleComponets/PopUp';
import { OptionStatusUserAdmin } from '../OptionStatusUserAdmin/OptionStatusUserAdmin';


export const StatusUsersAdmin = ({dataStatusUsersAdmin}) => {
  const {
    objectSelectListSelectSetStatus,
    idObject,
    statusChange,
    statusChangeSet,
    nameStatus,
    idObjectStatus, 
    data, 
    capturarid, 
    numberReports
  }=dataStatusUsersAdmin;

  const [stateUser, setStateUser]=useState(nameStatus);
  const [isOpen, setIsOpen] = useState(false);
  const [stateColor, setStateColor]=useState('');
  const [idStateUser, setIdStateUser]=useState(idObjectStatus);
  const [idUser, setIdUser]=useState(idObject);


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

  const changeStateUsers=(event)=>{
    setStateUser(event.target.textContent)
    setIsOpen(!isOpen)
    setStateColor(event.target.classList[2])
    setIdStateUser(parseInt(event.target.id))
    statusChangeSet(!statusChange)
  }

  useEffect(() => {
    setStateColor (changeColorStateUsers(stateUser))
  },[stateColor])

  useEffect(() =>{
    changeState(numberReports)
  },[''])

  const dataOptionStatusUserAdmin={
    colorStatus:changeColorStateUsers,
    bringStatus:changeStateUsers
  }

  return (
    <div className='position_relative fieldSize13'>
      <p className={'op_state_user '+ stateColor} onClick={()=>{setIsOpen(!isOpen)}}>{stateUser}</p>
      <PopUp isOpen={isOpen}>
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options'>
          <h5 className='spacing'>Estados del usuario</h5>
          {
            data?.filter(item=>item.id!==4).map(item=>(<OptionStatusUserAdmin objectAllStatus={item} dataOptionStatusUserAdmin={dataOptionStatusUserAdmin} key={item.id}/>))
          }
        </div>
      </PopUp>
    </div>
  )
}