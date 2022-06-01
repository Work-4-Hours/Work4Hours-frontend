import React from 'react'
import 'Components/Ui/CardUser/CardUser.css'
import './LoadingCardUser.css'

export const LoadingCardUser = () => {
    
    return (
        <div className="card_user loading_card_user">
            <div className="animation_load_card_user"></div>
            <div className="animation_load_card_user slow"></div>
            <div className="header_card_user header_loading_card_user">
                <p className='name_service_header_card'></p>
            </div>
            <div className="body_card_user body_loading_card_user">
                {/* <PhotoUserProfile infoProfile={infoUserN} style='small_profile' small={true} /> */}
                <div className="circle_profile_user"></div>
                <p className='name_card_user name_loading_card_user'></p>
            </div>
        </div>
    )
}
