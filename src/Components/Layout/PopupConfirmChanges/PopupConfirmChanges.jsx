import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PopupConfirmChanges.css';

import { Alert } from 'Components/Ui/Alert';
import { Button } from 'Components/Ui/Button/Button';
import { PopUp } from 'Components/StyleComponets/PopUp';
import { PopupTitleAdmin } from 'Components/Ui/PopupTitleAdmin/PopupTitleAdmin';
import { PopupConfirmChangesContentObjects } from '../PopupConfirmChangesContentObjects/PopupConfirmChangesContentObjects';

const apiAdmin = process.env.REACT_APP_API_ADMIN;
const API = process.env.REACT_APP_API;

export const PopupConfirmChanges = ({ dataPopupConfirmChanges, objectContent }) => {

    const {
        setData,
        getAdmin,
        selectedList, 
        setselectedList,
        nameTitle,
        valueButton,
        token,
        email,
        typePetition,
        typeAdmin
    }=dataPopupConfirmChanges;

    const [isOpen, setIsOpen] = useState(false);
    const [passwordAdmin, setPasswordAdmin]=useState('');
    const [passwordAdminValidate,setPasswordAdminValidate]=useState(false);

    const validationInput= (e) => {
        if(e.keyCode===13){
            if(e.target.value!==""){
                sendObjects();
            }
            else{
                Alert("Campo vacío", "Ingrese la contraseña por favor.", "info", "Ok");
            }
        }
    }

    const popUpOpen = () => {
        if(selectedList.length===0){
            Alert("No se registran cambios", `Por favor seleccione y cambie el estado del ${typeAdmin}.`, "info", "Ok");
        }
        else{
            setIsOpen(!isOpen);
        }
    }

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
                if (res){
                    axios.put(`${apiAdmin}/api/${typePetition}`, selectedList)
                    .then(response => {
                        console.log(response);
                        setselectedList([]);
                        setIsOpen(!isOpen);
                        Alert("Cambios realizados", `El cambio de estado de ${typeAdmin} se realizo correctamente.`, "success", "Ok");    
                        setData(getAdmin(typePetition));
                    })
                    .catch(e => {console.log(e);})
                }
                else{
                    Alert("Error", "La contraseña ingresada es incorrecta no se pueden realizar cambios.", "error", "Ok");
                }
            })
            .catch(err=>console.log(err))
        }
        else{
            setPasswordAdmin('');
            Alert("Campo vacío", "Ingrese la contraseña por favor.", "info", "Ok");
        }
    }

    return (
        <div className='btn_save_changes_admin_position'>
            <Button className="button btn_save_changes_admin" value="Guardar Cambios" onClick={() => popUpOpen()} />
            <PopUp isOpen={isOpen}>
                <div className="overlay_Popup_Confirm_Changes_Content_Object">
                    <div className='popup_admin_save_changes_admin'>
                        <PopupTitleAdmin title={nameTitle} />
                        <PopupConfirmChangesContentObjects content={objectContent} />
                        <input type="password" className='password_admin_save_changes_admin' value={passwordAdmin} placeholder='Ingrese su contraseña de administrador' onChange={(e)=>{setPasswordAdmin(e.target.value)}} onKeyUp={(e)=>{validationInput(e)}}/>
                        <div className='btns_save_changes_admin'>
                            <div className='btns_save_changes_admin_spacing'>
                                <Button value="Cancelar" className="button btn_change_color_gray" onClick={() => {setIsOpen(!isOpen)}} />
                                <Button value={valueButton} onClick={(e)=>{sendObjects(e);}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </PopUp>
        </div>
    )
}