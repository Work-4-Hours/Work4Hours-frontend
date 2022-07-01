import React,{useEffect, useState} from 'react'
import './CheckBoxAdmin.css'

export const CheckBoxAdmin = ({dataCheckBoxAdmin}) => {

  const {
    objectAll, 
    designCheckBoxAdmin, 
    deletingSelectedDeslectCheckbox,
    selectedList,
    setSelectedList,
    boardType,
    idStatus,
    removeCheckbox, setRemoveCheckbox
  } = dataCheckBoxAdmin;

  const [radioState, setRadioState] = useState(false);
  const [statusChecked, setStatusChecked]=useState(false);

  useEffect(()=>{
    if(removeCheckbox.status===false && objectAll.id===removeCheckbox.id){
      setRadioState(false);
      setStatusChecked(false);
    }
    setRemoveCheckbox({id:0,status:true})

  },[removeCheckbox.status])

  const [allObject, setallObject]=useState([]);
  
  useEffect(()=>{
    if(objectAll!==undefined){
      setallObject(objectAll)
      if(selectedList.length>0){
        selectedList.map(item=>{
          if(item.id===objectAll.id){
            setRadioState(true);
            setStatusChecked(true);
          }
        })
      }
    }
  },[''])
 
  const validarcheckbox=(e)=>{
    if(e && boardType===true){
      const datauser={
        idStatus:idStatus, 
        email:allObject.correo, 
        id:allObject.id, 
        photo:allObject.fotop, 
        name:allObject.nombreUsuario, 
        color:allObject.color
      }
      setSelectedList([...selectedList, datauser]);
    }
    else if(e && boardType===false){
      
      const dataServices={
        idStatus:idStatus,
        id:allObject.id,
        name:allObject.nombreServicio
      }
      setSelectedList([...selectedList, dataServices]);

    }
    else{
      deletingSelectedDeslectCheckbox(allObject.id, selectedList, setSelectedList);
    }
 }
 
 //With each click the check box is activated or deactivated
 const changeCheckboxStatus=()=>{
  if(radioState===false){
    setStatusChecked(true);
    setRadioState(true);
    validarcheckbox(true)
  }
  else{
    setStatusChecked(false);
    setRadioState(false);
    validarcheckbox(false)
  }
  
 }


  return (
    <div className='text_center fieldSize8' >
      <label className='position_flex_center'>
          <input type="radio" className='cb_confirm_changes' id={allObject.id} checked={statusChecked} name={allObject.id} onClick={changeCheckboxStatus} readOnly />
          <span className={designCheckBoxAdmin}></span>
      </label>
    </div>
  )
}