import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmailForm from './EmailForm';
import Card from 'react-bootstrap/Card';
import CardGroup from "react-bootstrap/CardGroup"
import AppInput from './AppInput';

function Members({context}){
    
    const {members, deleteMember, setCurrentHousehold} = context;
  

  
    return (
        <CardGroup className="appCol-xl-4 appCol-md-6 appCol-sm-12 mx-auto" >
        <Card >
            <Card.Header>Your Households</Card.Header>
            <Card.Body>
                {
                    !members.length ? 
                    ( <h3>You don't belong to any households yet</h3> ) :
                    (
                        members.map(member => (
                            <AppInput
                                key={member._id}
                                fields = {[
                                    { class: `memberItem`, text: member.displayName}
                                ]}
                                onDelete={()=> deleteMember(member._id)}
                            />
                        ))
                    )
                }

            </Card.Body>
        </Card>
        <Card >
            <Card.Header>Want to add a roomate?</Card.Header>
            <Card.Body className="appForm">
                <EmailForm context={context}/>
            </Card.Body>
        </Card>
        </CardGroup>
    )
}

export default Members;



