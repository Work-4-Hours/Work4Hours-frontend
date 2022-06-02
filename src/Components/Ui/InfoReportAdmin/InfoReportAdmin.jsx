import React,{useState} from 'react'
import './InfoReportAdmin.css'
import axios from 'axios';
import { PopUp } from 'Components/StyleComponets/PopUp';
import { ListReportsAdmin } from '../ListReportsAdmin/ListReportsAdmin';

export const InfoReportAdmin = ({dataReports}) => {
  console.log(dataReports.dataReport);
  const [isOpen, setIsOpen] = useState(false);

  const popupClose = () => {
    if(dataReports.numberReports === 0){
      setIsOpen(false)
    }
    else{
      setIsOpen(!isOpen)
    }
  }

  const onClickNumberReport = () => {
    setIsOpen(!isOpen); 
    dataReports.setIdUser(dataReports.idUserReports); 
    popupClose()
  }
  
  return (
    <div className='position_relative fieldSize8' >
      <p className='text_center pointer_userSelect_none'  onClick={()=>{onClickNumberReport()}}>{dataReports.numberReports}</p>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options content_type_report'>
          <h5 className='spacing'>Tipos de Reportes</h5>
          <div>
            {dataReports.dataReport?.map(item => (<ListReportsAdmin objectListReports={item} key={item.idreporte}/>))}
          </div>
        </div>
      </PopUp>
    </div>
  )
}
