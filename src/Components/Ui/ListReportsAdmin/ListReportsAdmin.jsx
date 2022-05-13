import React from 'react'

export const ListReportsAdmin = ({objectListReports}) => {
  const {nombrereporte, cantidadReportes}=objectListReports;
  return (
    <div className="typ_report spacing">
      <p>{nombrereporte}</p><p>{cantidadReportes}</p>
    </div>
  )
}
