import React from 'react';
import './Dashboard.css';

export const Dashboard = ({componetContent, style}) => {
  return (
    <div className={'dashborard scroll ' + style}>
      {componetContent}
    </div>
  )
}
