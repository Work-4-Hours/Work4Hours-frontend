import React from 'react';
import './SearchBox.css';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';

export const SearchBox = ({dataSearch, dataFilter}) => {
  const {nameSearch,postWorkSearch, searchNumber, searchString, nameFilter, setNameFilter}=dataSearch;
  const {data} = dataFilter;
  //  const [numberIdFilterSelect, setNumberIdFilterSelect] = useState();

  // const deleteFilterCheckbox = async () => {
  //   await validateNameFilter();
  //   data.forEach(element => {
  //     if(setStringIdFilterSelect === element.id){
  //       setNumberIdFilterSelect(element.id);
  //     }
  //   })
  // }

  // useEffect(() => {
  //   deleteFilterCheckbox();
  // }, [nameFilter]);
  
  const viewFilterSelected = () => {
    if(nameFilter!==""){
      return(
        <div className='object_filter_selected'>
          <p>{nameFilter}</p>
          <label>
            <input type="radio" className="delete_appearance" onClick={() => {setNameFilter('')}} />
            <span className='delete_user_status'>X</span>
          </label>
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