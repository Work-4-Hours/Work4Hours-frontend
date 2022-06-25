import React, {useState} from 'react';
import './OptionFilterUserAdmin.css';
import { useDescheckByClic } from 'CustomHooks/useDescheckByClic';


export const OptionFilterUserAdmin = ({option, dataOptionFilter}) => {
  const [radioState, setRadioState] = useState(false);
  const {unSelect, setNameFilter}=dataOptionFilter;
  const descheck = useDescheckByClic();
  const {nombre,id}=option;

    const changeCheckboxStatus=(e)=>{
      if(radioState===false){
        descheck.check(e);
        setRadioState(true);
        setNameFilter(nombre);
      }
      else{
        descheck. uncheck(e);
        setRadioState(false);
        unSelect(e);
        setNameFilter('');
      }
    }
    
  return (
    <div className='typ_report'>
        <p>{nombre}</p>
        <label>
          <input type="radio" id={id} name="filter" className='checkbox_admin_filter' onClick={(e)=>{changeCheckboxStatus(e)}} />
          <span className='span_admin_filter'></span>
        </label>
    </div>
  )
}