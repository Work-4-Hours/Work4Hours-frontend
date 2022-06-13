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
  const [idFilter, setIdFilter] = useState(0);

  //Consumption of get from users, services and states
  const getAdmin=(url)=>{
    axios.get(`${api}/api/${url}`)
    .then(response=>{ 
      if(url==="State"){
        setDataState(response.data)
      }
      else {
        console.log(response.data)
        setData(response.data)
      }
      })
    .catch(e=>{
      console.log(e)})
  }

  //Array validation whether or not the query brings data
  const validateDataPostWorkSearch=(response)=>{
    if(response.data.length>0){
      setSearchWord(response.data)
      setValidateSearchWord(true)
    }
    else{
      setValidateSearchWord(false)
    }
  }

  //Word search with filtering from services and users
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

  //Validation of word if it is a number or string from reports
  const searchFilter=(id, word,searchString)=>{
    if((searchString==="SearchUsers" && id==="2") || (searchString==="SearchServices" && id==="1")){
      if(!isNaN(parseInt(word))){
        postSearhFilter(id,word,searchString)
      }
      else{
        //Alerta
        console.log("selecciono la opcion reportes y solo recibe numeros")
      }
    }
    else{
      postSearhFilter(id,word,searchString)
    }

  }
  //data filtering request
  const postSearhFilter=(id, word,searchString)=>{
    axios.post(`${api}/${searchString}/filter?value=${id}&word=${word}`)
    .then(response=>{validateDataPostWorkSearch(response)})
    .catch(e=>{console.log(e)})
  }

  //update the id of the filter option
  const changeFilteringOptionId=(e)=>{
    setIdFilter(e.target.id);
  }

  //deselects an option by setting the initial state
  const unSelect = (e) => {
    setIdFilter(0);
    return e.target.checked = false
  }

  //Consultation of a user's reports
  const getAdminReports =  (url, id) => {
    axios.get(`${api}/api/${url}?id=${id}`)
    .then(response=>{ 
      if(url==="ReportsUsers"){
        setReport(response.data)
      }
      else {
        setReport(response.data)
      }
      })
    .catch(e=>{
      console.log(e)})
  }


  //Removal of objects in the selection of checkboxes
  const deletingSelectedDeslectCheckbox =(id)=>{
    selectedList.map(item=>{
      if(item.id===id){
        const index=selectedList.indexOf(item);
        selectedList.splice(index,1)
      }
    })
    setselectedList([...selectedList]);
  }
  //Status update even if selected
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
    validateSearchWord,
    changeFilteringOptionId,
    unSelect
  }
}
