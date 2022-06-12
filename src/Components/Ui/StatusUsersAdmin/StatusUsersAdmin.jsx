import React,{useState, useEffect} from 'react';
import './StatusUsersAdmin.css';
import { PopUp } from 'Components/StyleComponets/PopUp';
import { OptionStatusUserAdmin } from '../OptionStatusUserAdmin/OptionStatusUserAdmin';


export const StatusUsersAdmin = ({dataStatusAdmin}) => {
  const {
    objectSelectedSetState,
    idObject,
    nameStatus,
    idObjectStatus, 
    data,  
    numberReports,
    changeStatus,
    setChangeStatus,
    setIdStatus
  }=dataStatusAdmin;

  const [stateObject, setStateObject]=useState(nameStatus);
  const [isOpen, setIsOpen] = useState(false);
  const [stateColor, setStateColor]=useState('');
  const [idStateObject, setIdStateObject]=useState(idObjectStatus);



  const changeState = (reportsNumber) => {
    if(reportsNumber === 25){
      setStateObject("Suspendido por 3 días")
      setIdStateObject(2)
    }
    else if(reportsNumber === 50){
      setStateObject("Inhabilitado")
      setIdStateObject(3)
    }
  }

  const changeColorStateObjects= (UserState) =>{  
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

  const changeStateObjects=(event)=>{
    setStateObject(event.target.textContent)
    setIsOpen(!isOpen)
    setStateColor(event.target.classList[2])
    setIdStateObject(parseInt(event.target.id))
    setChangeStatus(!changeStatus)
  }

  useEffect(() => {
    setStateColor (changeColorStateObjects(stateObject))
  },[stateColor])

  useEffect(() =>{
    changeState(numberReports)
  },[''])

  useEffect(()=>{
    objectSelectedSetState(changeStatus, idObject, idStateObject)
  },[changeStatus])
  useEffect(()=>{
    setIdStatus(idStateObject)
  },[idStateObject])

  const dataOptionStatusUserAdmin={
    colorStatus:changeColorStateObjects,
    bringStatus:changeStateObjects
  }

  return (
    <div className='position_relative fieldSize13'>
      <p className={'op_state_user '+ stateColor} id={idStateObject} onClick={()=>{setIsOpen(!isOpen)}}>{stateObject}</p>
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