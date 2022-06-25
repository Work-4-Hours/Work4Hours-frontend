import React,{useEffect, useState} from 'react'
import './CheckBoxAdmin.css'
import { useDescheckByClic } from 'CustomHooks/useDescheckByClic';

export const CheckBoxAdmin = ({dataCheckBoxAdmin}) => {
  const [radioState, setRadioState] = useState(false);
  const descheck = useDescheckByClic();
 
  const {
    objectAll, 
    designCheckBoxAdmin, 
    deletingSelectedDeslectCheckbox,
    selectedList,
    setselectedList,
    boardType,
    idStatus,
  } = dataCheckBoxAdmin;


  const [allObject, setallObject]=useState([]);

  useEffect(()=>{
    if(objectAll!==undefined){
      setallObject(objectAll)
    }
  },[''])

 
  const validarcheckbox=(e)=>{
    if(e.target.checked && boardType===true){
      const datauser={
        idEstado:idStatus, 
        email:allObject.correo, 
        id:allObject.id, 
        fotoUser:allObject.fotop, 
        nombres:allObject.nombreUsuario, 
        color:allObject.color
      }
      setselectedList([...selectedList, datauser]);
      // setLocalStorage(datauser);
      
    }
    else if(e.target.checked && boardType===false){
      const dataServices={
        idEstado:idStatus,
        id:allObject.id,
        nombre:allObject.nombreServicio
      }
      setselectedList([...selectedList, dataServices]);
    }
    else if(!e.target.checked && boardType===true){ 
      deletingSelectedDeslectCheckbox(allObject.id);
      
    }
    else{
      deletingSelectedDeslectCheckbox(allObject.id);
    }
 }

 //With each click the check box is activated or deactivated
 const changeCheckboxStatus=(e)=>{
  if(radioState===false){
    descheck.check(e);
    setRadioState(true);
  }
  else{
    descheck. uncheck(e);
    setRadioState(false);
  }
  validarcheckbox(e)
 }

 //cambiar el id por id
  return (
    <div className='text_center fieldSize8' >
      <label className='position_flex_center'>
          <input type="radio" className='cb_confirm_changes' id={allObject.id} name={allObject.id} onClick={(e)=>changeCheckboxStatus(e)}/>
          <span className={designCheckBoxAdmin}></span>
      </label>
    </div>
  )
}