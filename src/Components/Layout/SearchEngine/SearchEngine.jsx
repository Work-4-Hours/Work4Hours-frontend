import { InputSearch } from 'Components/Ui/InputSearch/InputSearch'
import React from 'react'
import './SearchEngine.css'

export const SerchEngine = () => {
    return (
        <div className="serch_engine">
            <div className="center_serch_engine">
                <InputSearch placeholder='Buscar servicios...' />
            </div>
        </div>
    )
}
