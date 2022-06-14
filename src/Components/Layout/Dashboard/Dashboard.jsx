import React from 'react';
import './Dashboard.css';

export const Dashboard = ({componetContent, result}) => {

  
  return (
    <div className={'dashborard scroll ' + result}>
      {componetContent}
    </div>
  )
}
