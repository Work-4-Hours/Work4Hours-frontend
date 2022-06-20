import React from 'react';
import './SearchBox.css';
import { BsSearch } from 'react-icons/bs';
import { BsX } from 'react-icons/bs';

export const SearchBox = ({dataSearch}) => {
  const {nameSearch,postWorkSearch, searchNumber, searchString, nameFilter, setNameFilter}=dataSearch;

  const viewFilterSelected = () => {
    if(nameFilter!==""){
      return(
        <div className='object_filter_selected'>
          <p>{nameFilter}</p>
          <BsX className='delete_user_status' onClick={() => {setNameFilter('')}}/>
        </div>
      )
    }
  }

  return (
    <div className='search_box'>
      <BsSearch/>
      <input type="text" placeholder={nameSearch} onKeyUp={(e)=>{postWorkSearch(e, searchNumber,searchString)}}  className='box_search'/>
      {viewFilterSelected()}
    </div>
  )
}