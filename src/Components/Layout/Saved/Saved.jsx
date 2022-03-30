import React from 'react'
import { Title } from 'Components/StyleComponets/Titlte'

import './Saved.css'
import { Button } from 'Components/Ui/Button/Button'

export const Saved = () => {

    const service = {
        price: "200.000",
        image: "https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png",
        city: "Armenia",
        departament: "Quindio",
        title: "Pinto casas a domicilio Lorem"
    }

    return (
        <main>
            <Title>Mis servicios - Borradores</Title>         

            <table className="table_publication_service">
                <thead>
                    <tr>
                        <th></th>
                        <th>Informacion</th>
                        <th>Reportes</th>
                        <th>Operaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='row_table_info_service'>
                        <td className='td_start'><img className='image_service_saved_dashboard' src="https://avatars.githubusercontent.com/u/85415169?v=4" alt="" /></td>
                        <td>
                            <p>{service.title}</p> 
                            <p>{service.city} {service.departament}</p>   
                            <p>$ {service.price} por hora</p>   
                        </td>
                        <td>
                            Ninguno
                        </td>
                        <td className='td_end'>
                            <Button value='Editar'/>
                            <Button value='Elimnar'/>
                        </td>
                    </tr>

                    <tr className='row_table_info_service'>
                        <td className='td_start'><img className='image_service_saved_dashboard' src="https://avatars.githubusercontent.com/u/85415169?v=4" alt="" /></td>
                        <td>
                            <p>{service.title}</p> 
                            <p>{service.city} {service.departament}</p>   
                            <p>$ {service.price} por hora</p>   
                        </td>
                        <td>
                            Ninguno
                        </td>
                        <td className='td_end'>
                            <Button value='Editar'/>
                            <Button value='Elimnar'/>
                        </td>
                    </tr>

                </tbody>
            </table>
        </main>
    )
}
