import { UserInfo } from 'Components/Ui/UserInfo/UserInfo';
import React from 'react';
import './Dashboard.css';

export const Dashboard = ({componetContent}) => {
  return (
    <div className='dashborard scroll'>
      {componetContent}
    </div>
  )
}
