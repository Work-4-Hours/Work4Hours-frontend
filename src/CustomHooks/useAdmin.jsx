import axios from 'axios';
import React,{useState,useEffect} from 'react'
const api = process.env.REACT_APP_API_ADMIN;

export const useAdmin = () => {
  const [data, setData] = useState([])
  const [dataState, setDataState] = useState([])
  
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

  // const prueba=()=>{
  //   getAdmin('State')
  // }
  

  return {data,getAdmin, dataState}
}

