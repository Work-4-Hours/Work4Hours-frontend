import axios from "axios";
import { AdminContext } from "Context/AdminContext";
import { useState,useEffect,useContext } from "react";
const API = process.env.REACT_APP_API;

export const useAdminValidateToken = () => {
    const [validateToken,setValidateToken] = useState(true);
    const { getToken} = useContext(AdminContext);
    //Validation of token
    const tokenValidationRequests = () =>{
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
        tokenValidationRequests()
    }, [''])


    return {
        validateToken
    }
}
