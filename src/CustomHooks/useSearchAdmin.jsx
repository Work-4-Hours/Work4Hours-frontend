import axios from 'axios';
import { Alert } from 'Components/Ui/Alert';
import { useState } from 'react';
import { useAdminValidateToken } from './useAdminValidateToken';
const apiAdmin = process.env.REACT_APP_API_ADMIN2;

export const useSearchAdmin = () => {
    const { validateToken } = useAdminValidateToken();
    const [searchWord,setSearchWord]=useState([]);
    const [validateSearchWord,setValidateSearchWord]=useState(true);
    const [idFilter, setIdFilter] = useState(0);
    const [nameFilter, setNameFilter] = useState('');

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

  return {
    postWorkSearch,
    searchWord,
    validateSearchWord,
    changeFilteringOptionId,
    unSelect, 
    nameFilter, 
    setNameFilter
  }
}