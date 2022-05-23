import { Button } from 'Components/Ui/Button/Button';
import { PopUp } from 'Components/StyleComponets/PopUp';
import React, { useState, useEffect } from 'react'
import './PopupConfirmChanges.css'
import { PopupTitleAdmin } from 'Components/Ui/PopupTitleAdmin/PopupTitleAdmin';
import { PopupConfirmChangesContentObjects } from '../PopupConfirmChangesContentObjects/PopupConfirmChangesContentObjects';
import axios from 'axios';



export const PopupConfirmChanges = ({ infoAdmin, token, nameTitle, valueButton, objectContent, styleObjects, listUsersSelect, sendNotification }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [passwordAdmin, setPasswordAdmin]=useState('');
    const [passwordAdminValidate,setPasswordAdminValidate]=useState(false);
    const API = process.env.REACT_APP_API;

 
    const sendUsers = (e) =>{
        e.preventDefault();

        axios.post(`${API}/allowChanges/${infoAdmin.info[0].email}/${passwordAdmin}`,{
            headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'authorization':token
        }
        })
        .then(response=>{
        console.log(response);

        })
        .catch(error=>
        console.log(error)
        );

        // if(listUsersSelect.length != 0){
        //     axios.put(`https://localhost:44342/api/Users`, listUsersSelect)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     })
        //     listUsersSelect.map(item=>{
        //         sendNotification(item.idUsuario, "hola mundo","Alertas", "#000", "")
        //         console.log(item.idUsuario)
        //     })
        // }
        setIsOpen(false);
    }

    return (
        <div className='btn_save_changes_admin_position'>
            <Button className="button btn_save_changes_admin" value="Guardar Cambios" onClick={event => setIsOpen(!isOpen)} />
            <PopUp isOpen={isOpen}>
                <div className="overlay_Popup_Confirm_Changes_Content_Object">
                    <div className='popup_admin_save_changes_admin'>
                        <PopupTitleAdmin title={nameTitle} />
                        <PopupConfirmChangesContentObjects content={objectContent} object={styleObjects} />
                        <form onSubmit={(e)=>{sendUsers(e)}}>
                            <input type="password" className='password_admin_save_changes_admin' placeholder='Ingrese su contraseña de administrador' onChange={(e)=>{setPasswordAdmin(e.target.value)}} />
                            <div className='btns_save_changes_admin'>
                                <div className='btns_save_changes_admin_spacing'>
                                    <Button value="Cancelar" className="button btn_change_color_gray" onClick={event => setIsOpen(!isOpen)} />
                                    <Button value={valueButton}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </PopUp>
        </div>
    )
}
