import React from 'react';
import './SelectTypeServiceAdmin.css';

export const SelectTypeServiceAdmin = () => {
  return (
    <div>
        <select className='select_option_type_service' >
            <option className='option_select_type_service'>Oferta</option>
            <option className='option_select_type_service'>Demanda</option>
        </select>
    </div>
  )
}
