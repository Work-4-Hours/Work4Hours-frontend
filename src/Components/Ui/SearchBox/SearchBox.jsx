import React from 'react';
import './SearchBox.css';
import { BsSearch } from 'react-icons/bs';

export const SearchBox = ({dataSearch, dataFilter}) => {
  const {nameSearch,postWorkSearch, searchNumber, searchString, nameFilter, setNameFilter}=dataSearch;
  const {data} = dataFilter;

//   const prueba = () => {
//     let contador = 0;
//     let idFilter = "";
//     while (contador<=data.length){
//       idFilter = data[contador].id    
//     }
//     contador=contador+1
//     return(parseInt(idFilter))
//     // data[contador].map(item=>{return item.id})
//     // contador = contador +1 ;
//   }


// console.log(prueba()); 

  // const pruebaArray = data.map(function(item) {
  //   return item.id;
  // });

  // console.log(pruebaArray);

  const nose = () => {
    for (let i = 0; i < data.length; i++) {
      return data[i].id
    }
  }

  console.log(nose());
  const viewFilterSelected = () => {
    if(nameFilter!==""){
      return(
        <div className='object_filter_selected'>
          <p>{nameFilter}</p>
          <label>
            {/* {data.map(item=><input type="radio" id={item.id} name={item.id} key={item.id}  onClick={() => {setNameFilter('')}} />)} */}
            <input type="radio" id={nose()} onClick={() => {setNameFilter('')}} />
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