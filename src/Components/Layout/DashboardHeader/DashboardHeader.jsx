import React from 'react';
import './DashboardHeader.css';

export const DashboardHeader = ({space1,space2,space3,space4,space5,header1,header2,header3,header4,header5,header6,header7,propsReport}) => {
  return (
    <div className='dashboard_header'>
      <p className={space1}>{header1}</p>
      <p className={space4}>{header2}</p>
      <p className={space4}>{header3}</p>
      <p className={space5}>{header4}</p>
      <p className={space2 + propsReport}>{header5}</p>
      <p className={space3}>{header6}</p>
      <p className='fieldSize8'>{header7}</p>
    </div>
  )
}
