import React, { useState} from 'react'
import './PopupConfirmChanges.css'
import axios from 'axios';
import { Alert } from 'Components/Ui/Alert';

import { Button } from 'Components/Ui/Button/Button';
import { PopUp } from 'Components/StyleComponets/PopUp';
import { PopupTitleAdmin } from 'Components/Ui/PopupTitleAdmin/PopupTitleAdmin';
import { PopupConfirmChangesContentObjects } from '../PopupConfirmChangesContentObjects/PopupConfirmChangesContentObjects';



export const PopupConfirmChanges = ({ dataPopupConfirmChanges, objectContent }) => {
    const apiAdmin = process.env.REACT_APP_API_ADMIN;
    const API = process.env.REACT_APP_API;
    
    const {
        selectedList, 
        nameTitle,
        valueButton,
        token,
        email,
        typePetition
    }=dataPopupConfirmChanges;

    const [isOpen, setIsOpen] = useState(false);
    const [passwordAdmin, setPasswordAdmin]=useState('');


    const sendObjects=(e)=>{
        if(passwordAdmin!==""){
            fetch(`${API}/allowChanges/${email}/${passwordAdmin}`,{
                method:"POST",
                headers:{
                    'Authorization': `JWT ${token}`
                }
            })
            .then(res=>res.json())
            .then(res=>{
                if (!res){
                    Alert("Error", "La contraseña ingresada en incorrecta.", "error", "Ok")
                }
                else{
                    axios.put(`${apiAdmin}/api/${typePetition}`, selectedList)
                    .then(response => {
                        console.log(response)
                        setIsOpen(!isOpen)
    
                    })
                    .catch(e => {
                        console.log(e);
                    })
                }
            })
            .catch(err=>console.log(err))
        }
    }

    return (
        <div className='btn_save_changes_admin_position'>
            <Button className="button btn_save_changes_admin" value="Guardar Cambios" onClick={() => setIsOpen(!isOpen)} />
            <PopUp isOpen={isOpen}>
                <div className="overlay_popup_confirm_changes_content_object">
                    <div className='popup_admin_save_changes_admin'>
                        <PopupTitleAdmin title={nameTitle} />
                        <PopupConfirmChangesContentObjects content={objectContent} />
                        <input type="password" className='password_admin_save_changes_admin' placeholder='Ingrese su contraseña de administrador' onChange={(e)=>{setPasswordAdmin(e.target.value)}}/>
                        <div className='btns_save_changes_admin'>
                            <div className='btns_save_changes_admin_spacing'>
                                <Button value="Cancelar" className="button btn_change_color_gray" onClick={() => {setIsOpen(!isOpen)}} />
                                <Button value={valueButton} onClick={(e)=>{sendObjects(e)}}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </PopUp>
        </div>
    )
}
