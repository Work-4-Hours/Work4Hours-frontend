import { Button } from 'Components/Ui/Button/Button';
import { PopUp } from 'Components/StyleComponets/PopUp';
import React, { useState, useEffect } from 'react'
import './PopupConfirmChanges.css'
import { PopupTitleAdmin } from 'Components/Ui/PopupTitleAdmin/PopupTitleAdmin';
import { PopupConfirmChangesContentObjects } from '../PopupConfirmChangesContentObjects/PopupConfirmChangesContentObjects';
import axios from 'axios';



export const PopupConfirmChanges = ({ dataPopupConfirmChanges, objectContent }) => {

    const {
        selectedList, 
        nameTitle,
        valueButton
    }=dataPopupConfirmChanges;

    const [isOpen, setIsOpen] = useState(false);
    const [passwordAdmin, setPasswordAdmin]=useState('');
    const [passwordAdminValidate,setPasswordAdminValidate]=useState(false);

    return (
        <div className='btn_save_changes_admin_position'>
            <Button className="button btn_save_changes_admin" value="Guardar Cambios" onClick={event => setIsOpen(!isOpen)} />
            <PopUp isOpen={isOpen}>
                <div className="overlay_Popup_Confirm_Changes_Content_Object">
                    <div className='popup_admin_save_changes_admin'>
                        <PopupTitleAdmin title={nameTitle} />
                        <PopupConfirmChangesContentObjects content={objectContent} />
                        {/* <form onSubmit={(e)=>{sendUsers(e)}}> */}
                        <form>
                            <input type="password" className='password_admin_save_changes_admin' placeholder='Ingrese su contraseña de administrador' onChange={(e)=>{setPasswordAdmin(e.target.value)}} required/>
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
