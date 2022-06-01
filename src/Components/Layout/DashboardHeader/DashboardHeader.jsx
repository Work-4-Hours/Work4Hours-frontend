import React from 'react';
import './DashboardHeader.css';

export const DashboardHeader = ({dataDashboarHeader}) => {
  return (
    <div className='dashboard_header'>
      <p className={dataDashboarHeader.columWidth1}>{dataDashboarHeader.columText1}</p>
      <p className={dataDashboarHeader.columWidth2}>{dataDashboarHeader.columText2}</p>
      <p className={dataDashboarHeader.columWidth3}>{dataDashboarHeader.columText3}</p>
      <p className={dataDashboarHeader.columWidth4}>{dataDashboarHeader.columText4}</p>
      <p className={dataDashboarHeader.columWidth5 + dataDashboarHeader.colorTituleReport + ' text_center'}>{dataDashboarHeader.columText5}</p>
      <p className={dataDashboarHeader.columWidth6}>{dataDashboarHeader.columText6}</p>
      <p className={dataDashboarHeader.columWidth7}>{dataDashboarHeader.columText7}</p>
    </div>
  )
}
