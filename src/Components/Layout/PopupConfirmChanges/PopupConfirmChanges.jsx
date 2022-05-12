import { Button } from 'Components/Ui/Button/Button';
import { PopUp } from 'Components/StyleComponets/PopUp';
import React,{useState} from 'react'
import './PopupConfirmChanges.css'
import { PopupTitleAdmin } from 'Components/Ui/PopupTitleAdmin/PopupTitleAdmin';
import { PopupConfirmChangesContentObjects } from '../PopupConfirmChangesContentObjects/PopupConfirmChangesContentObjects';

export const PopupConfirmChanges = ({nameTitle, valueButton, objectContent, styleObjects}) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='btn_save_changes_admin_position'>
        <Button className="button btn_save_changes_admin" value="Guardar Cambios" onClick={event=>setIsOpen(!isOpen)}/>
        <PopUp isOpen={isOpen}>  
            <div className="overlay_Popup_Confirm_Changes_Content_Object">
                <div className='popup_admin_save_changes_admin'>
                    <PopupTitleAdmin title={nameTitle}/>
                    <PopupConfirmChangesContentObjects content={objectContent} object={styleObjects}/>
                    <input type="password" className='password_admin_save_changes_admin' placeholder='Ingrese su contraseña de administrador'/>
                    <div className='btns_save_changes_admin'>
                        <div className='btns_save_changes_admin_spacing'>
                            <Button value="Cancelar" className="button btn_change_color_gray" onClick={event=>setIsOpen(!isOpen)}/>
                            <Button value={valueButton} onClick={event=>setIsOpen(!isOpen)}/>
                        </div>
                    </div>
                </div>
            </div>
        </PopUp>
    </div>
  )
}
