import { PopUp } from 'Components/StyleComponets/PopUp';
import React,{useState} from 'react'
import { Button } from '../Button/Button';
import { OptionFilterUserAdmin } from '../OptionFilterUserAdmin/OptionFilterUserAdmin';
import './FilterObjectAdmin.css'



export const FilterObjectAdmin = ({dataFilter}) => {
    const{changeFilteringOptionId,unSelect,data, setNameFilter}=dataFilter;
    const [isOpen, setIsOpen] = useState(false);

    const dataOptionFilter={
      unSelect:unSelect,
      setNameFilter
    }

  return (
    <div className='content_filter'>
        <Button className="button btn_search_filter_admin_users" value={"Filtro"} onClick={()=>{setIsOpen(!isOpen)}}/>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options filter_options' onChange={changeFilteringOptionId}>
            {data.map(item=><OptionFilterUserAdmin option={item} dataOptionFilter={dataOptionFilter} key={item.id}/>)}
        </div>
      </PopUp>
    </div>
  )
}
