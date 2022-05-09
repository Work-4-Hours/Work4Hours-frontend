import React,{useState} from 'react'
import './CheckBoxAdmin.css'

export const CheckBoxAdmin = ({deleteUserSelect,designCheckBoxAdmin, id, correo, idStatus,fotop, listUserSelectSet, selectUsers }) => {
 
  const validarcheckbox=(e)=>{
    if(e.target.checked){
      const datauser={idEstado:idStatus, email:correo, idUsuario:id, fotoUser:fotop}
      listUserSelectSet([...selectUsers, datauser]);
    }
    else{
      deleteUserSelect(id);
    }
 }
  return (
    <div className='text_center fieldSize8' >
      <label>
          <input type="checkbox" className='cb_confirm_changes' id={id} onChange={(e)=>validarcheckbox(e)}/>
          <span className={designCheckBoxAdmin}></span>
      </label>
    </div>
  )
}