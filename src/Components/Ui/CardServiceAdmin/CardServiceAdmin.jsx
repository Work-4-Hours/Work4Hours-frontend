import React from 'react'
import IconChecked from 'Assets/Icons/IconChecked.png'
import IconDanger from 'Assets/Icons/IconDanger.png'
import { ReactComponent as IconEdit } from 'Assets/Icons/IconEdit.svg'
import { ReactComponent as IconDelete } from 'Assets/Icons/IconDelete.svg'
import { ReactComponent as IconVisibility } from 'Assets/Icons/IconVisibility.svg'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'CustomHooks/useLocalStorage'
import { sha256 } from 'js-sha256'
import { useManageServices } from 'CustomHooks/useManageServices'

import './CardServiceAdmin.css'
import { toast, ToastContainer } from 'react-toastify'

export const CardServiceAdmin = ({ service = {} }) => {

    const navigate = useNavigate()

    const [value, setValue] = useLocalStorage(sha256('idservice'), null)
    const [serviceInfo, setServiceInfo] = useLocalStorage(sha256('serviceinfo'), null)

    const { data, loading, deleteService } = useManageServices()

    const updateService = () => {
        setValue({ id: service.id, service })
        navigate('/dashboard/update-service')
    }

    const appeal = () => {
        setServiceInfo(service)
        navigate('/claim')
    }

    const service_delete_successfully = () => toast.success('Servicio agregado exitosamente', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    return (
        <>
           
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


                    <div className="visibility_card_service_dashboard">
                        {
                            service.visibility == 1 &&
                            <div className="info_visibility_card_service_dashboard">
                                <IconVisibility className='icon_visibility' />
                                <p className='text_visibility_card_service'>Visible</p>
                            </div>
                        }
                        {
                            service.visibility == 2 &&
                            <div className="info_visibility_card_service_dashboard">
                                <IconVisibility className='icon_visibility' />
                                <p className='text_visibility_card_service'>Borrador</p>
                            </div>
                        }

                        {
                            service.visibility == 3 &&
                            <div className="info_visibility_card_service_dashboard">
                                <IconVisibility className='icon_visibility' />
                                <p className='text_visibility_card_service'>Inhabilitado</p>
                                <p onClick={appeal}>Apelar</p>
                            </div>
                        }

                    </div>
                </div>

                <div className="actions_card_service_dashboard">
                    <div className="edit_card_service_dashboard">

                        <IconEdit className='icon_edit_card_service' onClick={() => updateService()} />
                    </div>
                    <div className="delete_card_service_dashboard">
                        <IconDelete className='icon_delete_card_service' onClick={() => {
                            deleteService(service.id)
                            service_delete_successfully()
                            navigate('/dashboard/all')
                        }} />
                    </div>
                </div>

            </div>
        </>
    )
}