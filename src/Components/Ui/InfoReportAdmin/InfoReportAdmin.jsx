import React,{useState} from 'react'
import './InfoReportAdmin.css'
import { PopUp } from 'Components/StyleComponets/PopUp';
import axios from 'axios';

export const InfoReportAdmin = ({NumberReports, idUsers}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [reports, setReports] = useState('');

  const showReport=(id)=>{
    axios.get(`https://localhost:44342/api/ReportsUsers?idusuario=${id}`)
    .then(response => {
      setReports(response.data)
      console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    })
  }

  const popupClose = () => {
    if(NumberReports === 0){
      setIsOpen(false)
    }
    else{
      setIsOpen(!isOpen)
    }
  }
  
  const showReportsUser = () => {
    reports.map(item=>{item})
  }
  return (
    <div className='position_relative fieldSize8' >
      <p className='text_center pointer_userSelect_none'  onClick={()=>{setIsOpen(!isOpen); showReport(idUsers); popupClose()}}>{NumberReports}</p>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options content_type_report'>
          <h5 className='spacing'>Tipos de Reportes</h5>
          <div className="typ_report spacing">{showReportsUser()}
            {/* {reports?.map(item => {<p>{item.nombrereporte}</p>})} */}
          </div>
        </div>
      </PopUp>
    </div>
  )
}
