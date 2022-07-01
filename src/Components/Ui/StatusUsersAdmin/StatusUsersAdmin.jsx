import React,{useState, useEffect} from 'react';
import './StatusUsersAdmin.css';

import { PopUp } from 'Components/StyleComponets/PopUp';
import { OptionStatusUserAdmin } from '../OptionStatusUserAdmin/OptionStatusUserAdmin';


export const StatusUsersAdmin = ({dataStatusAdmin}) => {
  const {
    objectSelectedSetState, setIdStatus,
    idObject, nameStatus, idObjectStatus, 
    data,  
    numberReports,
    changeStatus, setChangeStatus,
    setNotificationAutomaticSuspension,
    selectedList, setSelectedList,
  }=dataStatusAdmin;

  const [idStateObject, setIdStateObject]=useState(idObjectStatus);
  const [stateObject, setStateObject]=useState(nameStatus);
  const [stateColor, setStateColor]=useState('');
  const [isOpen, setIsOpen] = useState(false);



  const changeColorStateObjects= (UserState) =>{  
    if(UserState === "Habilitado"){
      return 'green';
    }
    else if (UserState === "Suspendido por 3 días"){
      return 'yellow';
    }
    else if (UserState === "Inhabilitado"){
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
  const stateObjectLocalStorage=()=>{
    if(selectedList.length>0){
      selectedList.map(item=>{
        if(item.id===idObject){
          if(item.idStatus===1){
            setStateObject("Habilitado")
          }
          else if(item.idStatus===2){
            setStateObject("Suspendido por 3 días")
          }
          else if(item.idStatus===3){
            setStateObject("Inhabilitado")
          }
        }
      }
      )
    }
  }
  useEffect(()=>{
    stateObjectLocalStorage()
  },[])

  
  useEffect(() => {
    setStateColor (changeColorStateObjects(stateObject))
  },[stateColor])



  useEffect(()=>{
    objectSelectedSetState(changeStatus, idObject, idStateObject, selectedList, setSelectedList)
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
      <div className='status_object_dashboard' id={idStateObject} onClick={()=>{setIsOpen(!isOpen)}}>
        <p className={'op_state_object '+ stateColor}></p>
        <p>{stateObject}</p>
      </div>
      <PopUp isOpen={isOpen}>
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options content_status_users'>
          <h5 className='spacing'>Estados del usuario</h5>
          {
            data?.filter(item=>item.id<=3).map(item=>(<OptionStatusUserAdmin objectAllStatus={item} dataOptionStatusUserAdmin={dataOptionStatusUserAdmin} key={item.id}/>))
          }
        </div>
      </PopUp>
    </div>
  )
}