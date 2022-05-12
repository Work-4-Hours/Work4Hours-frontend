import React,{useState} from 'react';
import './SearchBox.css';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';

export const SearchBox = ({typeSearch, wordSearchSet}) => {
  
  const enterSearch=(event)=>{
    let charCode = event.keyCode;
    if (charCode===13){
      const word=event.target.value;
        axios.post(`https://localhost:44342/api/SearchUsers?value=${word}`)
        .then(response => {
          wordSearchSet(response.data)
        })
        .catch(e => {
            console.log(e);
        })
    }
  }
  return (
    <div className='search_box'>
      <BsSearch/>
      <input type="search" placeholder={typeSearch} onKeyDown={(e)=>{enterSearch(e)}} className='box_search'/>
    </div>
  )
}

