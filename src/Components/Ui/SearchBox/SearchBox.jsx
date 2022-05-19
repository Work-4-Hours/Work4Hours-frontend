import React from 'react';
import './SearchBox.css';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';

export const SearchBox = ({typeSearch, wordSearchSet, setValidateSearchUserWord, idFilter}) => {
  
  const enterSearch=(event)=>{
    if(event.target.value!==""){
      if (event.keyCode===13){
        if(idFilter==""){
          if (!isNaN(parseInt(event.target.value)) == true){
            axios.post(`https://localhost:44342/busquedaGeneralReportes?value=${parseInt(event.target.value)}`)
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
          else{
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
          if(parseInt(idFilter)==1){
            filter(event,idFilter);
          }
          else if(parseInt(idFilter)==2){
            filter(event,idFilter);
          }
          else if(parseInt(idFilter)==3){
            filter(event,idFilter);
          }
          else if(parseInt(idFilter)==4){
            filter(event,idFilter);
          }
        }
      }
    }
    else{
      wordSearchSet([])
      setValidateSearchUserWord(true)
    }
  }
  
  const filter = (event, id) => {
    if(!isNaN(parseInt(event.target.value)) == true) {
      axios.post(`https://localhost:44342/busqueda/filter?value=${parseInt(id)}&word=${parseInt(event.target.value)}`)
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
    else {
      axios.post(`https://localhost:44342/busqueda/filter?value=${parseInt(id)}&word=${event.target.value}`)
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

  return (
    <div className='search_box'>
      <BsSearch/>
      <input type="text" placeholder={typeSearch} onKeyUp={(e)=>{enterSearch(e)}}  className='box_search'/>
    </div>
  )
}