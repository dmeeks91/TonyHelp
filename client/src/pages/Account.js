import React, { useState, useEffect }  from "react";
import Finance from "../components/Finance/Finance";
import Chores from "../components/Chores/Chores";
import { useParams } from "react-router-dom";
import API from '../utils/API';
import CardColumns from 'react-bootstrap/CardColumns';
import { HouseholdConsumer } from "../utils/HouseholdProvider";
import Members from "../components/Members";

function Account(){
    return(
        <HouseholdConsumer className="p-5">
               {(context) => {
                return(
                    <CardColumns className="row mx-2">
                        <Members context={context}/>
                        <Finance context={context}/>
                        <Chores context={context}/>
                    </CardColumns>
                )
            }}
        </HouseholdConsumer>
    );
}

export default Account;