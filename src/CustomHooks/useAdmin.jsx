import axios from 'axios';
import React,{useState,useEffect} from 'react'
const api = process.env.REACT_APP_API_ADMIN;

export const useAdmin = () => {
  const [data, setData] = useState([]);
  const [dataState, setDataState] = useState([]);
  const [selectedList, setselectedList]=useState([]);
  const [changeStatus, setChangeStatus]=useState(false);
  const [searchWord,setSearchWord]=useState([]);
  const [validateSearchWord,setValidateSearchWord]=useState(true);
  const [idFilter, setIdFilter] = useState(0);

  //Consumo de get de usuarios, servicios y estados
  const getAdmin=(url)=>{
    axios.get(`${api}/api/${url}`)
    .then(response=>{ 
      if(url==="State"){
        setDataState(response.data)
      }
      else{
        setData(response.data)}

      })
    .catch(e=>{
      console.log(e)})
  }

  //Validacion de array si trae o no datos la consulta
  const validateDataPostWorkSearch=(response)=>{
    if(response.data.length>0){
      setSearchWord(response.data)
      setValidateSearchWord(true)
    }
    else{
      setValidateSearchWord(false)
    }
  }

  //Busqueda de palabras con filtrado desde los servicios y usuarios
  const postWorkSearch=(event,searchNumber,searchString)=>{
    if(event.target.value!==""){
      if(event.keyCode===13){
        if (idFilter===0){
          if(!isNaN(parseInt(event.target.value))){
            axios.post(`${api}/${searchNumber}?value=${parseInt(event.target.value)}`)
            .then(response=>{
              validateDataPostWorkSearch(response)
            })
            .catch(e=>{console.log(e)})
          }
          else{
            axios.post(`${api}/api/${searchString}?value=${event.target.value}`)
            .then(response=>{
              validateDataPostWorkSearch(response)
            })
            .catch(e=>{console.log(e)})
          }
        }
        else{
          searchFilter(idFilter,event.target.value,searchString)
        }
      }
    }
    else{
      setSearchWord([])
      setValidateSearchWord(true)
    }
  }

  //Validacion de palabra si es numero o string
  const searchFilter=(id, word,searchString)=>{
    if(!isNaN(parseInt(word))){
      postSearhFilter(id,parseInt(word),searchString)
    }
    else{
      postSearhFilter(id,word,searchString)
    }
  }
  //peticion de filtrado de usuarios
  const postSearhFilter=(id, word,searchString)=>{
    console.log(id)
    console.log(word)
    console.log(searchString)
    axios.post(`${api}/${searchString}/filter?value=${id}&word=${word}`)
    .then(response=>{validateDataPostWorkSearch(response)})
    .catch(e=>{console.log(e)})
  }

  //Eliminacion de objetos en la seleccion de los checkboxs
  const deletingSelectedDeslectCheckbox =(id)=>{
    selectedList.map(item=>{
      if(item.id===id){
        const index=selectedList.indexOf(item);
        selectedList.splice(index,1)
      }
    })
    setselectedList([...selectedList]);
  }
  //Actualizacion del estado asi este seleccionado
  const objectSelectedSetState =(statusChange, idObject, idStatus)=>{
    if (statusChange===true){
      selectedList.map(item=>{
        if(item.id===idObject){
          item.idEstado=idStatus
        }
      })
      setselectedList([...selectedList]);
      setChangeStatus(!changeStatus);
    }
  }

  return {
    data,
    setData,
    getAdmin, 
    dataState, 
    deletingSelectedDeslectCheckbox, 
    objectSelectedSetState, 
    selectedList, 
    setselectedList, 
    changeStatus,
    setChangeStatus,
    postWorkSearch,
    searchWord,
    validateSearchWord,
    setIdFilter
  }
}

