import { PopUp } from 'Components/StyleComponets/PopUp';
import {React,useState} from 'react'
import './InfoReportAdmin.css'

export const InfoReportAdmin = () => {

    const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='cb_state_user' >
      <p className='text_center count_reports'  onClick={event=>setIsOpen(!isOpen)}>1000</p>
      <PopUp className='content_options' isOpen={isOpen} > 
        <h5 className='spacing'>Tipos de Reportes</h5>
        <div className="typ_report spacing">
            <p className='' >Ofensivo</p><p>1</p>
        </div>
        <div className="typ_report spacing">
            <p className='' >Abusivo</p><p>1</p>
        </div>
        <div className="typ_report spacing">
            <p className='' >indebido</p><p>1</p>
        </div>
        
        
        
      </PopUp>
    </div>
  )
}
