import React, { useEffect } from 'react'
import { CardServiceAdmin } from 'Components/Ui/CardServiceAdmin/CardServiceAdmin'
import { useManageServices } from 'CustomHooks/useManageServices';

export const Publications = () => {

    const { data: service, loading, getPublicatedServices } = useManageServices()

    useEffect(() => {
        getPublicatedServices()
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
