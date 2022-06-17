import React,{useEffect, useState} from 'react'
import './CheckBoxAdmin.css'

export const CheckBoxAdmin = ({dataCheckBoxAdmin}) => {

  const {
    objectAll, 
    designCheckBoxAdmin, 
    deletingSelectedDeslectCheckbox,
    selectedList,
    setselectedList,
    boardType,
    idStatus,
    idCheckboxDelete,
    checkboxIsCheck, 
    setcheckboxIsCheck
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
        id:allObject.idusuario, 
        fotoUser:allObject.fotop, 
        nombres:allObject.nombreUsuario, 
        color:allObject.color
      }
      setselectedList([...selectedList, datauser]);
    }
    else if(e.target.checked && boardType===false){
      const dataServices={
        idEstado:idStatus,
        id:allObject.idservicio,
        nombre:allObject.nombreServicio
      }
      setselectedList([...selectedList, dataServices]);
    }
    else if(!e.target.checked && boardType===true){ 
      deletingSelectedDeslectCheckbox(allObject.idusuario);
    }
    else{
      deletingSelectedDeslectCheckbox(allObject.idservicio);
    }

 }

 console.log(idCheckboxDelete);

  return (
    <div className='text_center fieldSize8' >
      <label className='position_flex_center'>
          <input type="checkbox" className='cb_confirm_changes' id={allObject.id} checked={checkboxIsCheck}  onClick={(e)=>validarcheckbox(e)}/>
          <span className={designCheckBoxAdmin}></span>
      </label>
    </div>
  )
}