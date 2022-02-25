import React from 'react'
import { FormLogin } from '../../Layout/FormLogin/FormLogin'
import './Login.css'

export const Login = () => {
    return (
        <div className="component_login"> 
             <div className="banner">
                <div className="container_info_login">
                    <div>
                        <img className="logo" src />
                        <h1 className="title_info_login">Works 4 Hours</h1>
                        <p className="paragraph_info_login">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                            nulla temporibus veniam fugiat molestias hic delectus voluptas
                            doloremque consequuntur eum. Earum vitae quibusdam modi ducimus
                            eveniet doloribus, similique ea numquam!
                        </p>
                    </div>
                </div>
            </div>
            <FormLogin/>
        </div>
    )
}