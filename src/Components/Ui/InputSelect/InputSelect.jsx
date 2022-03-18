import React from 'react'

export const AddService = ({nameSelect,options}) => {

    return (
        <select name="" id="">
            <option value="">{nameSelect}</option>
            {
                options.map((item,index) => (
                    <option key={index} value={item.id}>{item.name}</option>
                ))
            }
        </select>
    )
}