import React, { useState } from 'react'
import { useField } from 'CustomHooks/useField'
import { useManageServices } from 'CustomHooks/useManageServices'
import { regex_email, regex_names, regex_number, regex_password, regex_phone } from 'Validations/RejexForms'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { SelectTextLabel } from 'Components/Ui/SelectTextLabel/SelectTextLabel'

import './NewService.css'

export const NewService = () => {
    const { createService } = useManageServices()

    const name = useField({ type: 'text' })
    const price = useField({ type: 'number', validate: regex_number, message_errors: 'Ingrese un nombre de servicio valido' })
    const description = useField({ type: 'text' })
    const [type, setType] = useState(null);
    const [status, setStatus] = useState(null);


    return (
        <section className='section_form_new_service'>
            <div className="preview_image_service">
                Imagen
            </div>

            <form className='form_new_service' onSubmit={e => e.preventDefault()}>
                <InputTextLabel titleLabel='Nombre del servicio' input_style='input_dark' {...name} placeholder='Profesor' />

                <InputTextLabel titleLabel='Precio del servicio' input_style='input_dark' {...price} placeholder='000000' />

                <section className="state_new_service">

                    <SelectTextLabel
                        titleLabel='Tipo de servicio'
                        nameSelect='Tipo'
                        options={[{ id: 'O', name: "Oferta" }, { id: 'D', name: "Demanda" }]}
                        input_style='input_dark'
                        onChange={(e) => setType(e.target.value)}
                    />
                    <SelectTextLabel
                        titleLabel='Visualizacion'
                        nameSelect='Tipo'
                        options={[{ id: 1, name: "Visible" }, { id: 3, name: "Borrador" }]}
                        input_style='input_dark'
                        onChange={(e) => setStatus(e.target.value)}
                    />
                </section>

                <InputTextLabel titleLabel='Descripcion del servicio' input_style='input_dark' {...description} placeholder='Detalle su peticion o prestacion de su servicio' />

                <Button value={`${status == 1 ? 'Publicar servicio' : 'Guardar borrador'}`} />
            </form>

        </section>
    )
}
