import React from 'react';
import './Search.css';

import { SearchBox } from 'Components/Ui/SearchBox/SearchBox';

export const Search = ({nameSearch,filter}) => {
  return (
    <div className='search_filter_admin_users'>
      <SearchBox typeSearch={nameSearch}/>
      {filter}
    </div>
  )
}