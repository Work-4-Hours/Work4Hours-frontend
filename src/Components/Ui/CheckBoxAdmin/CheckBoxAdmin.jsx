import React,{useState} from 'react'
import './CheckBoxAdmin.css'

export const CheckBoxAdmin = ({select,designCheckBoxAdmin, id, correo, idStatus,pruebalist}) => {
 

  const validarcheckbox=(e)=>{

  if(e.target.checked){
    const datauser={idestado:2, correo:"camilo45@gmail.com", id:1}
    pruebalist([...select, datauser]);

    //{idStatus: 1, correo: "majos", id: "1"}
    // console.log(e.target)
    // console.log(idStatus)
    
  }
  else{

  } 

 }
 
  return (
    <div className='text_center fieldSize8' >
      <label>
          <input type="checkbox" className='cb_confirm_changes' id={id} name={correo} onClick={(e)=>validarcheckbox(e)}/>
          <span className={designCheckBoxAdmin}></span>
      </label>
    </div>
  )
}