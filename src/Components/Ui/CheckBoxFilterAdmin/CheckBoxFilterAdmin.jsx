import React from 'react';
import axios from 'axios';

export const CheckBoxFilterAdmin = ({designCheckBoxAdmin, id}) => {

    // axios.post(`https://localhost:44342/busqueda/filter?value=${e.target.id}&word=${localStorage.getItem('word')}`)
    // .then(response => {
    // // if(response.data.length>0){
    // //     console.log(response.data);
    // // }
    // // else{
    // //     setValidateSearchUserWord(false)
    // // }
    
    // console.log(response.data)
    // })
    // .catch(e => {
    // console.log(e);
    // })
    const validateChecked=(e)=>{
        if(e.target.checked ){
            if(e.target.id != 1){   
            }
        }
    }

  return (
    <div className='text_center fieldSize8' >
      <label className='position_flex_center'>
          <input type="checkbox" className='cb_confirm_changes' id={id} onClick={(e)=>validateChecked(e)}/>
          <span className={designCheckBoxAdmin}></span>
      </label>
    </div>  )
}
