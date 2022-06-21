import { useState } from "react";

export const useStatusAdmin = () => {
    const [selectedList, setselectedList]=useState([]);
    const [changeStatus, setChangeStatus]=useState(false);
    const [isOpen, setIsOpen] = useState(false);

    //Removal of objects in the selection of checkboxes
    const deletingSelectedDeslectCheckbox =(id)=>{
    selectedList.map(item=>{
        if(item.id===id){
        const index=selectedList.indexOf(item);
        selectedList.splice(index,1)
        }
    })
    setselectedList([...selectedList]);
    }

    //Status update even if selected
    const objectSelectedSetState =(statusChange, idObject, idStatus)=>{
    if (statusChange===true){
        selectedList.map(item=>{
        if(item.id===idObject){
            item.idEstado=idStatus
        }
        })
        setselectedList([...selectedList]);
        setChangeStatus(!changeStatus);
    }
    }

    // Validation to close popup when selectList is empty
    const closePopUpAndDeleteSelectedDeslectCheckBox = (id) => {
        deletingSelectedDeslectCheckbox(id);
        if(selectedList.length===0){
        setIsOpen(!isOpen)
        }
    }

    return {
        deletingSelectedDeslectCheckbox, 
        objectSelectedSetState, 
        selectedList, 
        setselectedList, 
        changeStatus,
        setChangeStatus,
        closePopUpAndDeleteSelectedDeslectCheckBox,
        isOpen,
        setIsOpen
    }
}
