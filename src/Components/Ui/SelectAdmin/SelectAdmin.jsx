import {React,useState} from 'react'
import './SelectAdmin.css'


export const SelectAdmin = () => {

  const [stateUser, setStateUser]=useState("Habilitado");
  

  const changeUserStatus=()=>{
    
    
  }

  return (
    <div className='cb_state_user' >
      <a className='op_state_user_initial' onClick={changeUserStatus()}>{stateUser}</a>
       <div className='content_options'>
        <h5 className='spacing'>Estados del usuario</h5>
        <div className='option_spacing'>
          <p className='op_state_user spacing'>Habilitado</p><p></p>
        </div>
        <div className='option_spacing'>
          <p className='op_state_user spacing'>Inhabilitado</p><p></p>
        </div>
        <div className='option_spacing'>
          <p className='op_state_user spacing'>Suspendido 3 dias</p><p></p>
        </div>
      </div> 
    </div>
  )
}
