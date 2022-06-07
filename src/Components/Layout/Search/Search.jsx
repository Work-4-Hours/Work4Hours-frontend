import React from 'react';
import './Search.css';

import { SearchBox } from 'Components/Ui/SearchBox/SearchBox';

export const Search = ({dataSearch}) => {
  
  return (
    <div className='search_filter_admin_users'>
      <SearchBox dataSearch={dataSearch} />
      {/* {filter} */}
    </div>
  )
}
