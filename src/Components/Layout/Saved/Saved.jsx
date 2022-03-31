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

            <section className='table_services'>
                <div clasS="header_table_services">
                    <div class="row_table_services_header">
                        <div></div>
                        <div>Informacion</div>
                        <div>Reportes</div>
                        <div>Operaciones</div>
                    </div>
                </div>
                <div clasS="body_table_services">
                    <div class="row_table_services">
                        <img className='image_info_service_table' src="https://avatars.githubusercontent.com/u/85415169?v=4" alt="" />
                        <div>Dato Fila 1 Columna 2</div>
                        <div>Dato Fila 1 Columna 3</div>
                        <div>Dato Fila 1 Columna 4</div>
                    </div>

                    <div class="row_table_services">
                        <img className='image_info_service_table' src="https://avatars.githubusercontent.com/u/85415169?v=4" alt="" />
                        <div>Dato Fila 1 Columna 2</div>
                        <div>Dato Fila 1 Columna 3</div>
                        <div>Dato Fila 1 Columna 4</div>
                    </div>
                </div>
            </section>
        </main>
    )
}
