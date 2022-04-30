import React,{useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios';


export function VerifyUserInSession(){
    let getRawData = localStorage.getItem('userData')
    let isUserInSession = getRawData != null || "" ? true : false
    return isUserInSession
}

export function GetUserInSessionData(){
    const rawUserData = localStorage.getItem('userData')
    if(rawUserData !== null || ""){
        return JSON.parse(rawUserData)
    }
}

export function verifyTypeOfLogin(){
    const rawData = GetUserInSessionData()
    if(rawData.idusuario == null || "" || undefined){
        const {GW, VX, kW} = rawData
            const newUserData = {
                idusuario : GW,
                nombres : VX,
                apellidos : kW
            }
        return newUserData
    }
    else{
        return GetUserInSessionData()
    }
}


export function GetAdmin(url){  
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch(`https://localhost:44342/api/${url}`)
        .then(response => response.json())
        .then(response => {
            setData(response)
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        })  
        .finally(() => setLoading(false))
    },[url])

    return {
        loading,
        data
    }
}

