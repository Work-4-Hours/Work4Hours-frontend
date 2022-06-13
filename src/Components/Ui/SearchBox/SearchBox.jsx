import React from 'react';
import './SearchBox.css';
import { BsSearch } from 'react-icons/bs';

export const SearchBox = ({dataSearch}) => {
  const {nameSearch,postWorkSearch, searchNumber, searchString}=dataSearch;
  return (
    <div className='search_box'>
      <BsSearch/>
      <input type="text" placeholder={nameSearch} onKeyUp={(e)=>{postWorkSearch(e, searchNumber,searchString)}}  className='box_search'/>
    </div>
  )
}