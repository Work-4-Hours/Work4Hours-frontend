import { PopUp } from 'Components/StyledComponets/PopUp';
import React,{useState} from 'react'
import { Button } from '../Button/Button';
import { OptionFilterUserAdmin } from '../OptionFilterUserAdmin/OptionFilterUserAdmin';
import './FilterObjectAdmin.css'
import { BsThreeDotsVertical } from 'react-icons/bs';

export const FilterObjectAdmin = ({dataFilter}) => {
    const{changeFilteringOptionId,changeFilterStatusInitial,data,setNameFilter}=dataFilter;
    const [isOpen, setIsOpen] = useState(false);

    const dataOptionFilter={
      changeFilterStatusInitial:changeFilterStatusInitial,
      setNameFilter:setNameFilter
    }

  return (
    <div className='content_filter'>
        <BsThreeDotsVertical className='icon_filter_admin' onClick={()=>{setIsOpen(!isOpen)}}/>
        <Button className="button btn_search_filter_admin_users remove_button" value={"Filtro"} onClick={()=>{setIsOpen(!isOpen)}}/>
      <PopUp isOpen={isOpen}> 
        <div className='overlay overlay_options' onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className='content_options filter_options' onChange={(e)=>changeFilteringOptionId(e)}>
            {data.map(item=><OptionFilterUserAdmin option={item} dataOptionFilter={dataOptionFilter} key={item.id}/>)}
        </div>
      </PopUp>
    </div>
  )
}
