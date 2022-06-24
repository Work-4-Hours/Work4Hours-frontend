import React,{useEffect, useState} from 'react'
import './CheckBoxAdmin.css'

export const CheckBoxAdmin = ({dataCheckBoxAdmin}) => {
  const [radioState, setRadioState] = useState(false);

  const {
    objectAll, 
    designCheckBoxAdmin, 
    deletingSelectedDeslectCheckbox,
    selectedList,
    setselectedList,
    localSelectedList, 
    setLocalselectedList, 
    removeLocalSelectList,
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
      setLocalselectedList(selectedList)
      console.log(localSelectedList)
      
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

 //unselect checkbox 
 const uncheck =(e)=>{
   return e.target.checked=false;
  }
  //select check box 
  const check =(e)=>{
  return e.target.checked=true;
 }
 //With each click the check box is activated or deactivated
 const changeCheckboxStatus=(e)=>{
  if(radioState===false){
    check(e);
    setRadioState(true);
  }
  else{
    uncheck(e);
    setRadioState(false);
  }
  validarcheckbox(e)
 }

  return (
    <div className='text_center fieldSize8' >
      <label className='position_flex_center'>
          <input type="radio" className='cb_confirm_changes' id={allObject.id} name={allObject.id} onClick={(e)=>changeCheckboxStatus(e)}/>
          <span className={designCheckBoxAdmin}></span>
      </label>
    </div>
  )
}