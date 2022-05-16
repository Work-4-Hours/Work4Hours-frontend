import React,{useState} from 'react'
import './InfoReportAdmin.css'
import axios from 'axios';
import { PopUp } from 'Components/StyleComponets/PopUp';
import { ListReportsAdmin } from '../ListReportsAdmin/ListReportsAdmin';

export const InfoReportAdmin = ({NumberReports, idUsers}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [reports, setReports] = useState([]);

  const showReport=(id)=>{
    axios.get(`https://localhost:44342/api/ReportsUsers?idusuario=${id}`)
    .then(response => {
      setReports(response.data)
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
  
  return (
    <div className='position_relative fieldSize8' >
      <p className='text_center pointer_userSelect_none'  onClick={()=>{setIsOpen(!isOpen); showReport(idUsers); popupClose()}}>{NumberReports}</p>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options content_type_report'>
          <h5 className='spacing'>Tipos de Reportes</h5>
          <div>
            {reports?.map(item => (<ListReportsAdmin objectListReports={item} key={item.idreporte}/>))}
          </div>
        </div>
      </PopUp>
    </div>
  )
}
