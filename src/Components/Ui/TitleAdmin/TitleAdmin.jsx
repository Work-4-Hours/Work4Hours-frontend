import React from 'react';
import './TitleAdmin.css';

export const TitleAdmin = ({typeAdmin}) => {
  return (
    <div className='title_admin'>
      <h1>Admin</h1>
      <h2>{typeAdmin}</h2>
    </div>
  )
}