import React from 'react';
import './DashboardHeader.css';

export const DashboardHeader = ({header1,header2,header3,header4,header5,header6,header7,prueba}) => {
  return (
    <div className='dashboard_header'>
      <p>{header1}</p>
      <p>{header2}</p>
      <p>{header3}</p>
      <p>{header4}</p>
      <p className={prueba}>{header5}</p>
      <p>{header6}</p>
      <p>{header7}</p>
    </div>
  )
}
