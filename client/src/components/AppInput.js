import React from "react";
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import FormControl from "react-bootstrap/FormControl";

function AppInput({addCheckBox, fields, assignedTo, onDelete, onSelect}){
    const getFields = () => {
        const fList = fields.map((field,i) => {
            return <FormControl
                key={`field-${i}`} 
                className={field.class} 
                onClick={onSelect} 
                type="text" 
                value={field.text}
                readOnly
            />
        });
        return <>{fList}</>
    }
        
    const showAssignees = () => {
        if (!assignedTo) return <></>
        
        const users = assignedTo.map(user => {
            if (user) {
                return user.displayName
            }
        })

        return (!users.length) ? <></> :
        <span className="app-input-span text-truncate text-capitalize">
            {
                users.join(", ")
            }
        </span>
    }
    
    return(
        <>
        <InputGroup className="my-2 appInput">
            {   (!addCheckBox) ? <></> :
                <InputGroup.Prepend>
                    <InputGroup.Checkbox checked={addCheckBox.checked} onChange={(e)=>addCheckBox.fx(e.target.checked)}/>
                </InputGroup.Prepend>
            }
            { getFields() }
            <InputGroup.Append>
                <Button className="px-3 py-4" onClick={onDelete}>
                <FontAwesomeIcon icon={faTrashAlt}/>
                </Button>
            </InputGroup.Append>
        </InputGroup>
        { showAssignees() }
        </>
    )
}

export default AppInput;