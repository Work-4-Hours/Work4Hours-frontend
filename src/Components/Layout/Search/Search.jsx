import React from 'react';
import './Search.css';

import { SearchBox } from 'Components/Ui/SearchBox/SearchBox';
import { FilterUserAdmin } from 'Components/Ui/FilterUserAdmin/FilterUserAdmin';



export const Search = ({nameSearch}) => {
  return (
    <div className='search_filter_admin_users'>
      <SearchBox typeSearch={nameSearch}/>
      <FilterAdmin/>
    </div>
  )
}
