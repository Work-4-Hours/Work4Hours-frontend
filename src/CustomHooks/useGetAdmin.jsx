
import axios from 'axios';
import { useState } from 'react';
import { useAdminValidateToken } from './useAdminValidateToken';
const apiAdmin = process.env.REACT_APP_API_ADMIN2;

export const useGetAdmin = () => {

    const { validateToken } = useAdminValidateToken();
    const [data, setData] = useState([]);
    const [dataState, setDataState] = useState([]);
    const [dataReport, setReport] = useState([]); 

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
  return {
    data,
    setData,
    getAdmin, 
    dataState, 
    getAdminReports,
    dataReport
  }
}
