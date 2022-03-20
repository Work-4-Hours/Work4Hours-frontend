import { Button } from 'Components/Ui/Button/Button';
import { PopUp } from 'Components/StyleComponets/PopUp';
import React,{useState} from 'react'
import './PopupConfirmChanges.css'
import { PopupTitleAdmin } from 'Components/Ui/PopupTitleAdmin/PopupTitleAdmin';
import { PopupConfirmChangesContentObjects } from '../PopupConfirmChangesContentObjects/PopupConfirmChangesContentObjects';



export const PopupConfirmChanges = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='btn_save_changes_admin_position'>
        <Button className="button btn_save_changes_admin" value="Guardar Cambios" onClick={event=>setIsOpen(!isOpen)}/>
        <PopUp isOpen={isOpen}>  
            <div className="overlay">
                <div className='popup_admin_save_changes_admin'>
                    <PopupTitleAdmin/>
                    <PopupConfirmChangesContentObjects/>
                    <input type="password" className='password_admin_save_changes_admin' placeholder='Ingrese su contraseña de administrador'/>
                    <div className='btns_save_changes_admin'>
                        <div className='btns_save_changes_admin_spacing'>
                            <Button value="Cancelar" className="button btn_change_color_gray" onClick={event=>setIsOpen(!isOpen)}/>
                            <Button value="Actualizar" onClick={event=>setIsOpen(!isOpen)}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </PopUp>
    </div>
  )
}
