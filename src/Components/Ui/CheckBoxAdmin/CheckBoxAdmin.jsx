import React,{useState} from 'react'
import './CheckBoxAdmin.css'

export const CheckBoxAdmin = ({designCheckBoxAdmin, id, correo, idStatus, listUserSelectSet, selectUsers }) => {
 
  const validarcheckbox=(e)=>{
    if(e.target.checked){
      const datauser={idEstado:idStatus, email:correo, idUsuario:id}
      listUserSelectSet([...selectUsers, datauser]);
    }
 }
 
  return (
    <div className='text_center fieldSize8' >
      <label>
          <input type="checkbox" className='cb_confirm_changes' onClick={(e)=>validarcheckbox(e)}/>
          <span className={designCheckBoxAdmin}></span>
      </label>
    </div>
  )
}