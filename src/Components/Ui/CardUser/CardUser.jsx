import React from 'react'
import { PhotoUserProfile } from '../PhotoUserProfile/PhotoUserProfile'
import './CardUser.css'

export const CardUser = ({ nameService='Nombre del servicio', infoUser }) => {
    return (
        <div className="card_user">
            <div className="header_card_user">
                <p className='name_service_header_card'>{nameService}</p>
            </div>
            <div className="body_card_user">
                <PhotoUserProfile infoProfile={infoUser} style='small_profile' small={true} />
                <p className='name_card_user'>{infoUser.name}</p>
            </div>
        </div>
    )
}
