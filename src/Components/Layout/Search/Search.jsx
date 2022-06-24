import React from 'react';
import './Search.css';

import { SearchBox } from 'Components/Ui/SearchBox/SearchBox';
import { FilterObjectAdmin } from 'Components/Ui/FilterObjectAdmin/FilterObjectAdmin';

export const Search = ({dataSearch, dataFilter, visible}) => {
  
  return (
    <div className={"search_filter_admin_users " + visible}>
      <SearchBox dataSearch={dataSearch}/>
      <FilterObjectAdmin dataFilter={dataFilter}/>
    </div>
  )
}