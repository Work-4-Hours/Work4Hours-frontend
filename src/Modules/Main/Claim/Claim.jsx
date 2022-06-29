import React from 'react'
import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyledComponets/DivShadow'
import { Title } from 'Components/StyledComponets/Titlte'
import { InputTextarea } from 'Components/Ui/InputTextarea/InputTextarea'
import { Button } from 'Components/Ui/Button/Button'
import IconDanger from 'Assets/Icons/IconDanger.png'
import './Claim.css'
import { useLocalStorage } from 'CustomHooks/useLocalStorage'
import { sha256 } from 'js-sha256'
import { UserContext } from 'Context/UserContext'
import { useContext } from 'react'
import { useField } from 'CustomHooks/useField'


export const Claim = () => {
    const [service, setValue] = useLocalStorage(sha256('serviceinfo'), null)
    const { getJwt, user } = useContext(UserContext)
    const appeal = useField({type: 'text'})
    // const service = {
    //     price: "200.000",
    //     image: "https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png",
    //     city: "Armenia",
    //     departament: "Quindio",
    //     title: "Pinto casas a domicilio",
    //     denuncia: "Contenido ofensivo",
    //     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio fugit, corporis earum rerum velit delectus"
    // }

    const sendAppeal = async (e) => {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_PRODUCTION}/appeal`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JSW ${getJwt()}`
            },
            body: JSON.stringify({
                email: user.info[0].email,
                serviceId: service.id,
                description: appeal.value
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
        .catch()
        .finally()
    }

    return (
        <>
        <Header/>
        <main className="main_claim">
            <div className="center_claim">
                <DivShadow className='info_service_claim'>
                    <div className="header_info_service_claim">
                        <div className="title_reason_claim">
                            <img className='icon_danger' src={IconDanger} alt="" />
                            <p className='reason_claim'>Servicio suspendido por {service.denuncia}</p>
                        </div>
                        <p className="name_service_claim">{service.name}</p>
                        <p className="description_service_claim">{service.description}</p>
                    </div>
                    <div className="image_info_service_claim">
                        <img className='image_service_claim' src={service.photo} alt="" />
                    </div>
                </DivShadow>
                <DivShadow className='service_claim'>
                    <Title className='title_form_claim'>Reclamar suspencion</Title>
                    <p className='info_reason'>Informenos el por que cree injusta o sin razon la denuncia de {service.denuncia} de su servicio</p>

                    <form onSubmit={e => sendAppeal(e)} className='form_claim' >
                        <InputTextarea {...appeal} placeholder='Apelacion'/>
                        <Button value='Enviar'/>
                    </form>

                </DivShadow>
            </div>
        </main>
        </>
    )
}
