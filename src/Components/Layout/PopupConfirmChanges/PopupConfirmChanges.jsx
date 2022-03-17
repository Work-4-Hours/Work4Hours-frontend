import { Button } from 'Components/Ui/Button/Button';
import { PopUp } from 'Components/StyleComponets/PopUp';
import {React,useState} from 'react'
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
                <div>
                    <PopupTitleAdmin/>
                    <PopupConfirmChangesContentObjects/>
                    <input type="password" name="" id="" />
                    <Button value="Cancelar" onClick={event=>setIsOpen(!isOpen)}/>
                    <Button value="Actualizar" onClick={event=>setIsOpen(!isOpen)}/>
                </div>
            </div>
        </PopUp>
    </div>
  )
}
