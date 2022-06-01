import React, { useContext } from 'react'
import IconChecked from 'Assets/Icons/IconChecked.png'
import IconDanger from 'Assets/Icons/IconDanger.png'
import { Button } from '../Button/Button'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'CustomHooks/useLocalStorage'
import { sha256 } from 'js-sha256'
import { UserContext } from 'Context/UserContext'


export const CardServiceAdmin = ({ service = {} }) => {

    const navigate = useNavigate()
    const {getJwt} = useContext(UserContext)
    const [value, setValue] = useLocalStorage(sha256('idservice'), null)

    const updateService = () => {
        setValue({ id: service.id, service })
        navigate('/service/edit')
    }

    const deleteService = () => {
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/deleteService/${service.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JSW ${getJwt()}`
            }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .finally()  
    }

    return (
        <div className="row_table_services">

            <img className='image_info_service_table' src={service.photo} alt="" />
            <div className='info_service_table'>
                <p className='title_service_table'>{service.name}</p>
                <p className='location_service_table'>{service.city_name} • {service.department_name}</p>
                <p className='price_service_table'>$ {service.price} por hora</p>
            </div>
            <div className='report_info_table'>
                {
                    service.reports > 0 ?
                        <div className="danger_reports">
                            <img className='icon_danger_table' src={IconDanger} alt="" />
                            <p className='value_report'>{service.reports}</p>
                        </div>
                        :
                        <div className="danger_reports">
                            <img className='icon_checked_table' src={IconChecked} alt="" />
                            <p className='value_not_report'>No hay reportes</p>
                        </div>
                }
            </div>
            <div className='operations_info_table'>
                <Button value='Editar' onClick={updateService} />
                <Button value='Eliminar' onClick={deleteService} />
            </div>
        </div>
    )
}
