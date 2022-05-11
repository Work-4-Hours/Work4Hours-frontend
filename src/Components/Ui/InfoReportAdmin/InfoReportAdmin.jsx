import { PopUp } from 'Components/StyleComponets/PopUp';
import React,{useState} from 'react'

export const InfoReportAdmin = ({NumberReports}) => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='position_relative fieldSize8' >
      <p className='text_center pointer_userSelect_none'  onClick={()=>{setIsOpen(!isOpen)}}>{NumberReports}</p>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options content_type_report'>
          <h5 className='spacing'>Tipos de Reportes</h5>
          <div className="typ_report spacing">
            <p>Ofensivo</p><p>1</p>
          </div>
          <div className="typ_report spacing">
            <p>Abusivo</p><p>1</p>
          </div>
          <div className="typ_report spacing">
            <p>indebido</p><p>1</p>
          </div>
        </div>
      </PopUp>
    </div>
  )
}
