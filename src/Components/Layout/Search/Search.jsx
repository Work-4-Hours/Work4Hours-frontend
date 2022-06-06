import React from 'react';
import './Search.css';

import { SearchBox } from 'Components/Ui/SearchBox/SearchBox';

export const Search = ({nameSearch,filter,wordSearchSet, setValidateSearchUserWord, idFilter}) => {
  return (
    <div className='search_filter_admin_users'>
      <SearchBox typeSearch={nameSearch} wordSearchSet={wordSearchSet} setValidateSearchUserWord={setValidateSearchUserWord} idFilter={idFilter}/>
      {filter}
    </div>
  )
}
