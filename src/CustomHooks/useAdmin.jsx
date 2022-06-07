import axios from 'axios';
import React,{useState,useEffect} from 'react'
const api = process.env.REACT_APP_API_ADMIN;

export const useAdmin = () => {
  
  const [data, setData] = useState([]);
  const [dataState, setDataState] = useState([]);
  const [dataReport, setReport] = useState([]); 
  const [selectedList, setselectedList]=useState([]);
  const [changeStatus, setChangeStatus]=useState(false);
  const [searchWord,setSearchWord]=useState([]);
  const [validateSearchWord,setValidateSearchWord]=useState(true);
  
  const getAdmin=(url)=>{
    axios.get(`${api}/api/${url}`)
    .then(response=>{ 
      if(url==="State"){
        setDataState(response.data)
      }
      else {
        setData(response.data)
      }
      })
    .catch(e=>{
      console.log(e)})
  }
  const validateDataPostWorkSearch=(response)=>{
    if(response.data.length>0){
      setSearchWord(response.data)
      setValidateSearchWord(true)
    }
    else{
      setValidateSearchWord(false)
    }
  }

  const postWorkSearch=(event,searchNumber,searchString)=>{
    if(event.target.value!==""){
      if(event.keyCode===13){
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
    }
    else{
      setSearchWord([])
      setValidateSearchWord(true)
    }
  }
  
  


  const getAdminReports =  (url, id) => {
    axios.get(`${api}/api/${url}?id=${id}`)
    .then(response=>{ 
      if(url==="ReportsUsers"){
        setReport(response.data) // trae datos anteriores
      }
      else {
        setReport(response.data)
      }
      })
    .catch(e=>{
      console.log(e)})
  }

  // el useEffect no lo soluciona y con funciones asincronas tampoco
  
  // useEffect(()=>{
  // },[dataReport])
  
  const deletingSelectedDeslectCheckbox =(id)=>{
    selectedList.map(item=>{
      if(item.id===id){
        const index=selectedList.indexOf(item);
        selectedList.splice(index,1)
      }
    })
    setselectedList([...selectedList]);
  }
  
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
    getAdminReports,
    dataReport,
    deletingSelectedDeslectCheckbox, 
    objectSelectedSetState, 
    selectedList, 
    setselectedList, 
    changeStatus,
    setChangeStatus,
    postWorkSearch,
    searchWord,
    validateSearchWord
  }
}