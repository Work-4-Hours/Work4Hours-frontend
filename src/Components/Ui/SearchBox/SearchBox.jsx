import React,{useEffect, useState} from 'react';
import './SearchBox.css';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';

export const SearchBox = ({typeSearch, wordSearchSet, setValidateSearchUserWord}) => {

  const enterSearch=(event)=>{
    if(event.target.value!==""){
      if (event.keyCode===13){
        axios.post(`https://localhost:44342/api/SearchUsers?value=${event.target.value}`)
        .then(response => {
          if(response.data.length>0){
            wordSearchSet(response.data)
            setValidateSearchUserWord(true)
          }
          else{
            setValidateSearchUserWord(false)
          }
          
          console.log(response)
        })
        .catch(e => {
          console.log(e);
        })
      }
    }
    else{
      wordSearchSet([])
      setValidateSearchUserWord(true)
    }
  }
  

  return (
    <div className='search_box'>
      <BsSearch/>
      <input type="text" placeholder={typeSearch} onKeyUp={(e)=>{enterSearch(e)}}  className='box_search'/>
    </div>
  )
}

