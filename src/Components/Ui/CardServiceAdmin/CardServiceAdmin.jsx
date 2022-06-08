import React from 'react'
import IconChecked from 'Assets/Icons/IconChecked.png'
import IconDanger from 'Assets/Icons/IconDanger.png'
import { ReactComponent as IconEdit } from 'Assets/Icons/IconEdit.svg'
import { ReactComponent as IconDelete } from 'Assets/Icons/IconDelete.svg'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'CustomHooks/useLocalStorage'
import { sha256 } from 'js-sha256'
import { useManageServices } from 'CustomHooks/useManageServices'

import './CardServiceAdmin.css'

export const CardServiceAdmin = ({ service = {} }) => {

    const navigate = useNavigate()

    const [value, setValue] = useLocalStorage(sha256('idservice'), null)

    const { data, loading, deleteService } = useManageServices()

    const updateService = () => {
        setValue({ id: service.id, service })
        navigate('/dashboard/update-service')
    }

    return (
        <div className="card_service_dashboard">

            <div className='section_info_card_service_dashboard'>
                <div className="image_card_service_dashboard">
                    <img src={service.photo} alt="" />
                </div>
                <div className="information_card_service_dashboard">
                    <p className="name_card_service">{service.name}</p>
                    <p className="description_card_service">{service.description}</p>
                </div>
                <div className="state_card_service_dashboard">
                    <p className='subtitle_reports_card_service_dashboard'>Reportes</p>
                    {
                        service.reports > 0 ?
                            <div className='info_state_card_service_dashboard'>
                                <img className='icon_danger_' src={IconDanger} alt="" />
                                <p className='value_report'>Tiene {service.reports} reporte/s</p>
                            </div>
                            :
                            <div className='info_state_card_service_dashboard'>
                                <img className='icon_checked_' src={IconChecked} alt="" />
                                <p className='value_not_report'>No hay reportes</p>
                            </div>
                    }
                </div>
            </div>

            <div className="actions_card_service_dashboard">
                <div className="edit_card_service_dashboard">

                    <IconEdit className='icon_edit_card_service' onClick={() => updateService()} />
                </div>
                <div className="delete_card_service_dashboard">
                    <IconDelete className='icon_delete_card_service' onClick={() => deleteService(service.id)} />
                </div>
            </div>

        </div>
    )
}