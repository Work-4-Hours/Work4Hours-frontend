import { Button } from 'Components/Ui/Button/Button';
import { SearchBox } from 'Components/Ui/SearchBox/SearchBox';
import React from 'react';
import './Search.css';



export const Search = ({nameSearch}) => {
  return (
    <div className='search_filter_admin_users'>
      <SearchBox typeSearch={nameSearch}/>
      <Button className="btn_search-filter_admin_users button" value={"Filtro"}/>
    </div>
  )
}
