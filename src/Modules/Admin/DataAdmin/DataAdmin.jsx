import { AdminContext } from 'Context/AdminContext'
import { GetAdmin } from 'Functions/ReusableFunctions'
import React,{useState} from 'react'
import { Services } from '../Services/Services'
import { Users } from '../Users/Users'



export const DataAdmin = () => {
  const [optionAdmin, setOptionAdmin] = useState(true)
  // const [validateSearchUserWord,setValidateSearchUserWord]=useState(true);
  // const [idFilter, setIdFilter] = useState('');
  // const [objectDataAdmin, setObjectDataAdmin] = useState([])
  // const [stateData, setStateData] = useState([])
  // const [listUsersSelect, setListUserSelect]=useState([]);
  // const [searchUsersWord,setSearchUsersWord]=useState([]);
  
  // const {admin,logoutAdmin,getToken,sendNotification} = useContext(AdminContext)
  console.log(optionAdmin)
  
  // //Get de los datos a cargar en el dashboard
  // const adminData =()=>{
  //   if (optionAdmin === false) {
  //     const {loading, data}=GetAdmin('Users')
  //     useEffect(()=>{
  //       if(loading===false){
  //         setObjectDataAdmin(data)
  //       }
  //     },[loading])
      
  //   }
  //   else if(optionAdmin===true){
  //     const {loading, data} = GetAdmin('Services')
  //       useEffect(()=>{
  //         if(loading===false){
  //           setObjectDataAdmin(data)
  //         }
  //       },[loading])

  //   }
  // }


  // //Datos de los estados
  // const dataState =()=>{
  //   const {loading, data} = GetAdmin('State')
  //   useEffect(()=>{
  //     if(loading===false){
  //       setStateData(data)
  //     }
  //   },[loading])
  // }
  // //Funcion para eliminar usuario de la lista
  //  const deleteUserSelect =(id)=>{
  //     listUsersSelect.map(userSelect =>{
  //       if(userSelect.idUsuario===id){
  //         const index=listUsersSelect.indexOf(userSelect);
  //         listUsersSelect.splice(index,1)
  //       }
  //     })
  //     setListUserSelect([...listUsersSelect]);
  //  }
   





  return (
    <>
      { optionAdmin ?
      <Users adminOption={optionAdmin} adminOptionSet={setOptionAdmin}/>
      :<Services adminOption={optionAdmin} adminOptionSet={setOptionAdmin}/>
      }
    </>
  )
}
