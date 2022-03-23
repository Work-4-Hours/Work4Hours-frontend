import React from 'react';
import './DashboardHeader.css';

export const DashboardHeader = ({header1,header2,header3,header4,header5,header6,header7,propsReport}) => {
  return (
    <div className='dashboard_header'>
      <p className='fieldSize3'>{header1}</p>
      <p className='fieldSize21'>{header2}</p>
      <p className='fieldSize21'>{header3}</p>
      <p className='fieldSize22'>{header4}</p>
      <p className={'fieldSize5 '+ propsReport}>{header5}</p>
      <p className='fieldSize8'>{header6}</p>
      <p className='fieldSize8'>{header7}</p>
    </div>
  )
}
