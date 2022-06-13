import React, { useEffect,useState } from 'react'

export const OptionStatusUserAdmin = ({objectAllStatus,dataOptionStatusUserAdmin}) => {
    const {colorStatus, bringStatus}=dataOptionStatusUserAdmin; 
    const {id, nombre_estado}=objectAllStatus;
    const [color, setColor]=useState('')
    useEffect(()=>{
        setColor(colorStatus(nombre_estado))
    },[])

  return (
    <div>
        {/* <p className={'op_state_object spacing '+color} id={id} onClick={(event)=>{bringStatus(event)}}>{nombre_estado}</p> */}
    </div>
  )
}
