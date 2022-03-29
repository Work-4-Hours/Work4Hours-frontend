import { PopUp } from 'Components/StyleComponets/PopUp';
import React,{useState} from 'react'
import './InfoReportAdmin.css'

export const InfoReportAdmin = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay]=useState('none');
  
  return (
    <div className='position_relative fieldSize5' >
      <p className='text_center count_reports'  onClick={()=>{setIsOpen(!isOpen); setDisplay('block')}}>1000</p>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen); setDisplay('block')}}></div>
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
