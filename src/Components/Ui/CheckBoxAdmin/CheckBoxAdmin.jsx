import React,{useEffect, useState} from 'react'
import './CheckBoxAdmin.css'

export const CheckBoxAdmin = ({dataCheckBoxAdmin}) => {

  const {
    objectAll, 
    designCheckBoxAdmin, 
    idStatus, 
    deletingSelectedDeslectCheckbox,
    selectedList,
    setselectedList,
    boardType
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
        nombres:allObject.nombres, 
        color:allObject.color
      }
      setselectedList([...selectedList, datauser]);
    }
    else if(e.target.checked && boardType===false){
      const dataServices={
        idEstado:idStatus,
        id:allObject.id,
        nombre:allObject.nombreServicio
      }
      setselectedList([...selectedList, dataServices]);
    }
    else{ 
      deletingSelectedDeslectCheckbox(allObject.idusuario);
    }
 }
  return (
    <div className='text_center fieldSize8' >
      <label className='position_flex_center'>
          <input type="checkbox" className='cb_confirm_changes' id={allObject.id}  onClick={(e)=>validarcheckbox(e)}/>
          <span className={designCheckBoxAdmin}></span>
      </label>
    </div>
  )
}