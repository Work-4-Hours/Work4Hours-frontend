import React from 'react';
import './DashboardHeader.css';

export const DashboardHeader = () => {
  return (
    <div className='dashboard_header'>
      <p className={space1}>{header1}</p>
      <p className={space2}>{header2}</p>
      <p className={space3}>{header3}</p>
      <p className={space4}>{header4}</p>
      <p className={space5 + propsReport + ' text_center'}>{header5}</p>
      <p className={space6}>{header6}</p>
      <p className={space7}>{header7}</p>
    </div>
  )
}
