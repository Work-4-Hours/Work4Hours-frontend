import React from 'react';
import './DashboardHeader.css';

export const DashboardHeader = ({dataDashboardHeader}) => {


  return (
    <div className='dashboard_header'>
      <p className={dataDashboardHeader.columWidth1}>{dataDashboardHeader.columText1}</p>
      <p className={dataDashboardHeader.columWidth2}>{dataDashboardHeader.columText2}</p>
      <p className={dataDashboardHeader.columWidth3}>{dataDashboardHeader.columText3}</p>
      <p className={dataDashboardHeader.columWidth4}>{dataDashboardHeader.columText4}</p>
      <p className={dataDashboardHeader.columWidth5 + dataDashboardHeader.colorTituleReport + ' text_center'}>{dataDashboardHeader.columText5}</p>
      <p className={dataDashboardHeader.columWidth6}>{dataDashboardHeader.columText6}</p>
      <p className={dataDashboardHeader.columWidth7}>{dataDashboardHeader.columText7}</p>
    </div>
  )
}
