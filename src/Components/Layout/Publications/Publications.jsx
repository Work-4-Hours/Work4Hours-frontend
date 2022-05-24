import React, { useContext, useState, useEffect } from 'react'
import { Title } from 'Components/StyleComponets/Titlte'
import { UserContext } from 'Context/UserContext'
import { CardServiceAdmin } from 'Components/Ui/CardServiceAdmin/CardServiceAdmin'
import jwt_decode from "jwt-decode";

export const Publications = () => {
    const { user, getJwt } = useContext(UserContext)
    const [service, setServicesUser] = useState([]);

    useEffect(() => {
        const getInfo = async () => {

            fetch(`${process.env.REACT_APP_API}/getUserServices/${jwt_decode(getJwt()).id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JSW ${getJwt()}`
                }
            })
                .then(response => response.json())
                .then(response => {
                    setServicesUser(response[0]);
                })
                .finally()
        }

        getInfo()
    }, [])

    return (
        <main>
            <Title>Mis servicios - Borradores</Title>

            <section className='table_services'>
                <div className="header_table_services">
                    <div className="row_table_services_header">
                        <div></div>
                        <div>Informacion</div>
                        <div>Reportes</div>
                        <div>Operaciones</div>
                    </div>
                </div>
                <div className="body_table_services">
                    {
                        service?.map((item,index) => (
                            <CardServiceAdmin service={item} key={index}/>
                        ))
                    }
                </div>
            </section>

        </main>
    )
}
