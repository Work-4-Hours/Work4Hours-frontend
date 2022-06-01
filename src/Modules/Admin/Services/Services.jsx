import React,{useEffect} from 'react';
import './Services.css';

import { MenuAdmin } from 'Components/Layout/MenuAdmin/MenuAdmin.jsx';
import { Search } from 'Components/Layout/Search/Search.jsx';
import { DashboardHeader } from 'Components/Layout/DashboardHeader/DashboardHeader.jsx';
import { Dashboard } from 'Components/Layout/Dashboard/Dashboard.jsx';
import { Button } from 'Components/Ui/Button/Button';
import { ServiceInfo } from 'Components/Ui/ServiceInfo/ServiceInfo';
import { FilterServiceAdmin } from 'Components/Ui/FilterServiceAdmin/FilterServiceAdmin';
import { PopupConfirmChanges } from 'Components/Layout/PopupConfirmChanges/PopupConfirmChanges';
import { ObjectDelete } from 'Components/Ui/ObjectDelete/ObjectDelete';
import { GetAdmin } from 'Functions/ReusableFunctions';
import { useAdmin } from 'CustomHooks/useAdmin';



export const Services = () => {
  // const { data } = GetAdmin('Services');
  // const dataState= GetAdmin('State');

  const { data, getAdmin } = useAdmin();

  useEffect(()=>{
    getAdmin('Services');
  },[])
    
  const dataMenuAdmin = {
    nameAdmin: "Servicios",
    buttonActivated: "btn_change_color_gray",
    buttonDeactivated: " ",
  }
  console.log(data)
  
  return (
    <div className='container_admin'>
      <MenuAdmin dataMenuAdmin={dataMenuAdmin}/>
      <Dashboard componetContent={
        data?.map(item=>(
          <ServiceInfo objectServiceInfo={item} key={item.idservicio}/>)
        ) }/>
    </div>
  )
}