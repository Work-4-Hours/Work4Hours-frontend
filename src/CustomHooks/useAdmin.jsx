import axios from 'axios';
import React,{useState} from 'react'
const api = process.env.REACT_APP_API_ADMIN;

export const useAdmin = () => {
  const [data, setData] = useState([])
  const [dataState, setDataState] = useState([])
  const [dataReport, setReport] = useState([])
  
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

  return {data,getAdmin, dataState, getAdminReports, dataReport}
}