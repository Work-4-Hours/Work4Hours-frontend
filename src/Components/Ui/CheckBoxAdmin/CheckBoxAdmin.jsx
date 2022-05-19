import React,{useEffect, useState} from 'react'
import './CheckBoxAdmin.css'

export const CheckBoxAdmin = ({objectAllUsers,deleteUserSelect,designCheckBoxAdmin, id, correo, idStatus,fotop, listUserSelectSet, selectUsers }) => {

  const [UserAllobject, setUserAllobject]=useState([]);
  useEffect(()=>{
    if(objectAllUsers!==undefined){
      setUserAllobject(objectAllUsers)
    }

  },[''])
  const validarcheckbox=(e)=>{
    if(e.target.checked){
      const datauser={idEstado:idStatus, email:UserAllobject.correo, idUsuario:UserAllobject.idusuario, fotoUser:UserAllobject.fotop, nombres:UserAllobject.nombres, color:UserAllobject.color}
      listUserSelectSet([...selectUsers, datauser]);
    }
    else{
      deleteUserSelect(UserAllobject.idusuario);
    }
 }
  return (
    <div className='text_center fieldSize8' >
      <label className='position_flex_center'>
          <input type="checkbox" className='cb_confirm_changes' id={UserAllobject.id}  onClick={(e)=>validarcheckbox(e)}/>
          <span className={designCheckBoxAdmin}></span>
      </label>
    </div>
  )
}