import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import { Alert } from 'Components/Ui/Alert';
import { AdminContext } from 'Context/AdminContext';

const apiAdmin = process.env.REACT_APP_API_ADMIN;
const API = process.env.REACT_APP_API;

export const useAdmin = () => {
  
  const [data, setData] = useState([]);
  const [dataState, setDataState] = useState([]);
  const [dataReport, setReport] = useState([]); 
  const [selectedList, setselectedList]=useState([]);
  const [changeStatus, setChangeStatus]=useState(false);
  const [searchWord,setSearchWord]=useState([]);
  const [validateSearchWord,setValidateSearchWord]=useState(true);
  const [idFilter, setIdFilter] = useState(0);
  const [validateToken,setValidateToken] = useState(true);
  const { getToken} = useContext(AdminContext);

  
  //Validation of token
  const validationTokenUsers = () =>{
    axios.get(`${API}/validate`, {
      headers:{
        'Authorization': `JWT ${getToken()}`
      }
    })
    .then(response=> {
      if(response.data.info === "Valid token"){
        setValidateToken(true)
      }
      else{
        setValidateToken(false)
      }
    })
    .catch(e=>{console.log(e)})
  }
  
  useEffect(() => {
    validationTokenUsers()
  }, [''])
  

  //Consumption of get from users, services and states
  const getAdmin=(url)=>{
    if(validateToken){
      axios.get(`${apiAdmin}/api/${url}`)
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
            if(validateToken){
              axios.post(`${apiAdmin}/${searchNumber}?value=${parseInt(event.target.value)}`)
              .then(response=>{
                validateDataPostWorkSearch(response)
              })
              .catch(e=>{console.log(e)})
            }
          }
          else{
            if(validateToken){
              axios.post(`${apiAdmin}/api/${searchString}?value=${event.target.value}`)
              .then(response=>{
                validateDataPostWorkSearch(response)
              })
              .catch(e=>{console.log(e)})
            }
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
        Alert("Error", "Selecciono la opción reportes y solo recibe numeros", "error", "Ok")
      }
    }
    else{
      postSearhFilter(id,word,searchString)
    }

  }

  //Data filtering request
  const postSearhFilter=(id, word,searchString)=>{
    if(validateToken){
      axios.post(`${apiAdmin}/${searchString}/filter?value=${id}&word=${word}`)
      .then(response=>{validateDataPostWorkSearch(response)})
      .catch(e=>{console.log(e)})
    }
  }

  //Update the id of the filter option
  const changeFilteringOptionId=(e)=>{
    setIdFilter(e.target.id);
  }

  //Deselects an option by setting the initial state
  const unSelect = (e) => {
    setIdFilter(0);
    return e.target.checked = false
  }

  //Consultation of a user's reports
  const getAdminReports =  (url, id) => {
    if(validateToken){
      axios.get(`${apiAdmin}/api/${url}?id=${id}`)
      .then(response=>{ 
        if(url==="ReportsUsers"){
          setReport(response.data)
        }
        else {
          setReport(response.data)
        }
        })
      .catch(e=>{console.log(e)})
    }
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