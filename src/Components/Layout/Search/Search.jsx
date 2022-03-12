import { SearchBox } from 'Components/Ui/SearchBox/SearchBox';
import React from 'react';
import './Search.css';


export const Search = ({nameSearch}) => {
  return (
    <div>
      <SearchBox typeSearch={nameSearch}/>
    </div>
  )
}
