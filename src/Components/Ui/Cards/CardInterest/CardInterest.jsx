import { DivShadow } from 'Components/StyledComponets/DivShadow'
import { Button } from 'Components/Ui/Button/Button'
import React from 'react'

import './CardInteres.css'

export const CardInterest = ({information}) => {
    return (
        <DivShadow className='interest_card'>
            <div className="information_interest_card">
                <p className='subtitle_interest_card'>{information.subtitle}</p>
                <h1 className="title_information_interest_card">
                    {information.title}
                </h1>
                <Button value='Ver más'/>
            </div>
            <div className="image_interest_card">
                <div className="gradient_image_interest_card"></div>
                <img src={information.image} alt="" />
            </div>
        </DivShadow>
    )
}
