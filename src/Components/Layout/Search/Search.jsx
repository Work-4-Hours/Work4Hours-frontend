import { SearchBox } from 'Components/Ui/SearchBox/SearchBox';
import React from 'react';
import './Search.css';


<<<<<<< HEAD
export const Search = ({nameSearch,filter,wordSearchSet}) => {
  return (
    <div className='search_filter_admin_users'>
      <SearchBox typeSearch={nameSearch} wordSearchSet={wordSearchSet}/>
      {filter}
=======
export const Search = () => {
  return (
    <div>
      <SearchBox/>
>>>>>>> d06b93eab29c3762fff3cc10c8ff6fb3ade48770
    </div>
  )
}
