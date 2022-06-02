import axios from 'axios';
import React,{useState,useEffect} from 'react'
const api = process.env.REACT_APP_API_ADMIN;

export const useAdmin = () => {
  const [data, setData] = useState([]);
  const [dataState, setDataState] = useState([]);
  const [selectedList, setselectedList]=useState([]);
  const [changeStatus, setChangeStatus]=useState(false);
  
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

  const deletingSelectedDeslectCheckbox =(id)=>{
    selectedList.map(item=>{
      if(item.idUsuario===id){
        const index=selectedList.indexOf(item);
        selectedList.splice(index,1)
      }
    })
    setselectedList([...selectedList]);
  }
  
  const objectSelectedSetState =(statusChange, idObject, idStatus)=>{
    if (statusChange===true){
      selectedList.map(item=>{
        //tiene que mirar como validar cual es cual para armar el objeto
        if(item.idUsuario===idObject){
          item.idEstado=idStatus
        }
      })
      setselectedList([...selectedList]);
      setChangeStatus(!changeStatus);
    }
  }

  return {data,getAdmin, dataState}
}

