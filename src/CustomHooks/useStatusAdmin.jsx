import { useState } from "react";



export const useStatusAdmin = () => {
    const [statusChecked, setStatusChecked]=useState(false);
    
    const [changeStatus, setChangeStatus]=useState(false);
    const [isOpen, setIsOpen] = useState(false);

    //Removal of objects in the selection of checkboxes
    const deletingSelectedDeslectCheckbox =(id,list,setlist)=>{
    list.map(item=>{
        if(item.id===id){
        const index=list.indexOf(item);
        list.splice(index,1)
        }
    })
    setlist([...list]);
    }

    //Status update even if selected
    const objectSelectedSetState =(statusChange, idObject, idStatus,list,setlist)=>{
    if (statusChange===true){
        list.map(item=>{
        if(item.id===idObject){
            item.idStatus=idStatus
        }
        })
        setlist([...list]);
        setChangeStatus(!changeStatus);
    }
    }

    // Validation to close popup when selectList is empty
    const closePopUpAndDeleteSelectedDeslectCheckBox = (id,list, setlist) => {
        deletingSelectedDeslectCheckbox(id,list, setlist);
        if(list.length===0){
        setIsOpen(!isOpen)
        }
    }

    return {
        deletingSelectedDeslectCheckbox, 
        objectSelectedSetState, 
        changeStatus,
        setChangeStatus,
        closePopUpAndDeleteSelectedDeslectCheckBox,
        isOpen,
        setIsOpen,
        statusChecked,
        setStatusChecked
    }
}
