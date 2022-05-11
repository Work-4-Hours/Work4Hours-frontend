import { SearchBox } from 'Components/Ui/SearchBox/SearchBox';
import React from 'react';
import './Search.css';


export const Search = ({nameSearch,filter,wordSearchSet}) => {
  return (
    <div className='search_filter_admin_users'>
      <SearchBox typeSearch={nameSearch} wordSearchSet={wordSearchSet}/>
      {filter}
    </div>
  )
}
