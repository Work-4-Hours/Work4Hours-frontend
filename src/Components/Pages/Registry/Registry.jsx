import React from 'react'
import { FormRegistry } from '../../Layout/FormRegistry/FormRegistry'
import './Registry.css'

export const Registry = () => {
    return (
        <div>
            <section className="register">
                <div className="filter">
                    <div className="center_register">
                        <div className="container_form_register">
                            <h1 className="subtitle">Registro</h1>
                            <FormRegistry />
                        </div>
                        <div className="container_info_register">
                            <h1 className="title_form_register">Work 4 Hours</h1>
                            <p className="paragraph_info_login">elit. Minima illo sequi nobis maxime velit suscipit voluptates in voluptas praesentium non!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}