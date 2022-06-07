import axios from 'axios';
import React,{useState} from 'react'
const api = process.env.REACT_APP_API_ADMIN;

export const useAdmin = () => {
  
  const [data, setData] = useState([]);
  const [dataState, setDataState] = useState([]);
  const [dataReport, setReport] = useState([]);
  const [selectedList, setselectedList]=useState([]);
  const [changeStatus, setChangeStatus]=useState(false);
  
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

  const getAdminReports=(url, id)=>{
    axios.get(`${api}/api/${url}?id=${id}`)
    .then(response=>{ 
      if(url==="ReportsUsers"){
        setReport(response.data)
        console.log(response.data)
      }
      else {
        setReport(response.data)
        console.log(response.data)
      }
      })
    .catch(e=>{
      console.log(e)})
  }

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
    getAdmin, 
    dataState, 
    getAdminReports,
    dataReport,
    deletingSelectedDeslectCheckbox, 
    objectSelectedSetState, 
    selectedList, 
    setselectedList, 
    changeStatus,
    setChangeStatus
  }
}