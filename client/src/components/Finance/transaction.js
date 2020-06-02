import React from 'react';
import AppInput from "../AppInput";


export const Transaction = ({transaction, deleteTransaction}) => {
    
    const {isExpense, name, amount, user} = transaction;
    const sign = isExpense ? '-' : '+';
    const cName = isExpense ? "minus" : "plus"
    return (
        <AppInput
            addCheckBox={false}
            fields = {[
                { class: `txName ${cName}`, text: name},
                { class: `txVal ${cName}`, text: `${sign} $${Math.abs(amount)}`}
            ]}
            assignedTo={(user) ? [user] : []}
            onDelete={()=> deleteTransaction(transaction)}
        />
    )
}
