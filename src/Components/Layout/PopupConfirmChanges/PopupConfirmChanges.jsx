import React, { useState} from 'react';
import axios from 'axios';
import './PopupConfirmChanges.css';

import { Alert } from 'Components/Ui/Alert';
import { Button } from 'Components/Ui/Button/Button';
import { PopUp } from 'Components/StyleComponets/PopUp';
import { PopupTitleAdmin } from 'Components/Ui/PopupTitleAdmin/PopupTitleAdmin';
import { PopupConfirmChangesContentObjects } from '../PopupConfirmChangesContentObjects/PopupConfirmChangesContentObjects';


export const PopupConfirmChanges = ({ dataPopupConfirmChanges, objectContent }) => {
    const apiAdmin = process.env.REACT_APP_API_ADMIN;
    const API = process.env.REACT_APP_API;

    const {
        data, 
        token, email,
        selectedList, removeSelectedList,
        typePetition,
        typeAdmin,
        isOpen, setIsOpen,
        sendNotification
    }=dataPopupConfirmChanges;

    const [passwordAdmin, setPasswordAdmin]=useState('');

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
        let detectChangeStatus = false;
        if(selectedList.length===0){
            Alert("No se registran cambios", `Por favor seleccione y cambie el estado del ${typeAdmin}.`, "info", "Ok");
        }
        else{
            selectedList.map(item=>{
                data.map(object => {
                    if(item.id===object.id){
                        if(item.idStatus===object.idEstado){
                            detectChangeStatus=true;
                        }
                    }
                });
            })
            if(detectChangeStatus){
                Alert("No se registran cambios de estados", `Verifique que toda la lista seleccionada tenga cambios.`, "info", "Ok");
            }
            else{
                setIsOpen(!isOpen);
            }
        }
    }

    const messageDescriptionNotification = (status, name) => {
        let message="";
        let messageUsers="Usted ha sido"
        let messageServices=`Su servicio ${name} ha sido`
        if(typeAdmin==="usuario"){
            if(status===1){
                message=`${messageUsers} habilitado de nuevo.`;
            }
            else if (status===2){
                message=`${messageUsers} suspendido por 3 días.`;
            }
            else if(status===3){
                message=`${messageUsers} inhabilitado.`;
            }

        }
        else{
            if(status===1){
                message=`${messageServices} habilitado de nuevo.`;
            }
            else if (status===2){
                message=`${messageServices} suspendido por 3 días.`;
            }
            else if(status===3){
                message=`${messageServices} inhabilitado.`;
            }
        }
        return message;
    }
    
    const sendNotificationAdmin=()=>{
        selectedList.map(item=>{
            const message=messageDescriptionNotification(item.idStatus, item.name);
            sendNotification(item.id, message,"Work 4 Hours", "#14A2D6", "")
            console.log(message);
        })
    }

    const sendObjects=()=>{
        if(passwordAdmin!==""){
            setIsOpen(!isOpen);
            fetch(`${API}/allowChanges/${email}/${passwordAdmin}`,{
                method:"POST",
                headers:{
                    'Authorization': `JWT ${token}`
                }
            })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                if (res.response){
                    axios.put(`${apiAdmin}/api/${typePetition}`, selectedList)
                    .then(response => {
                        console.log(response);
                        sendNotificationAdmin();
                        removeSelectedList();
                        
                        setPasswordAdmin('');
                        Alert("Cambios realizados", `El cambio de estado de ${typeAdmin} se realizo correctamente.`, "success"); 
                        setInterval(() => {
                            window.location.reload();
                        }, 500);   

                    })
                    .catch(e => {console.log(e);})
                }
                else{
                    setPasswordAdmin('');
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
                <div className="overlay_popup_confirm_changes_content_object">
                    <div className='popup_admin_save_changes_admin'>
                        <PopupTitleAdmin />
                        <PopupConfirmChangesContentObjects content={objectContent} />
                        <input type="password" className='password_admin_save_changes_admin' value={passwordAdmin} placeholder='Ingrese su contraseña de administrador' onChange={(e)=>{setPasswordAdmin(e.target.value)}} onKeyUp={(e)=>{validationInput(e)}}/>
                        <div className='btns_save_changes_admin'>
                            <div className='btns_save_changes_admin_spacing'>
                                <Button value="Cancelar" className="button btn_change_color_gray" onClick={() => {setIsOpen(!isOpen)}} />
                                <Button value="Actualizar" onClick={(e)=>{sendObjects(e);}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </PopUp>
        </div>
    )
}