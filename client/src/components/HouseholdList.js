import React, { useState, useEffect }  from "react";
import Card from 'react-bootstrap/Card';
import { Link, useHistory } from 'react-router-dom';
import AppInput from './AppInput';

export function HouseholdList({context}){
    const {myHouseholds, removeHouseHold, setCurrentHousehold} = context;
    const history = useHistory();
    const handleSelectHouse = ({_id}) => {
        setCurrentHousehold(_id);
        history.push("/household");
    }

    return (
        <Card >
            <Card.Header>Your Households</Card.Header>
            <Card.Body>
                {
                    !myHouseholds.length ? 
                    ( <h3>You don't belong to any households yet</h3> ) :
                    (
                        myHouseholds.map(house => (
                            <AppInput
                                key={house._id}
                                addCheckBox={false}
                                fields = {[
                                    { class: `houseItem`, text: house.name}
                                ]}
                                onDelete={()=> removeHouseHold(house)}
                                onSelect={() => { handleSelectHouse(house)}}
                            />
                        ))
                    )
                }
            </Card.Body>
        </Card>
    )
}