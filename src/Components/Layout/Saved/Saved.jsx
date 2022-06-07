import React, { useEffect } from 'react'
import { CardServiceAdmin } from 'Components/Ui/CardServiceAdmin/CardServiceAdmin'
import { useManageServices } from 'CustomHooks/useManageServices'

export const Saved = () => {

    const { data: service, loading, getServices } = useManageServices()

    useEffect(() => {
        getServices()
    }, [])

    return (

        <>
        {
            loading ?
                <>
                    <div className="loading_animation_card_service"></div>
                    <div className="loading_animation_card_service"></div>
                    <div className="loading_animation_card_service"></div>
                </>
                :
                service?.map((item, index) => (
                    <CardServiceAdmin service={item} key={index} />
                ))
        }

    </>

    )
}
