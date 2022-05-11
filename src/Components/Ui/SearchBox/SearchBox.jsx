import React from 'react';
import './SearchBox.css';
import { BsSearch } from 'react-icons/bs';

export const SearchBox = ({typeSearch}) => {
  return (
    <div className='search_box'>
      <BsSearch/>
      <input type="search" placeholder={typeSearch} className='box_search'/>
    </div>
  )
}
