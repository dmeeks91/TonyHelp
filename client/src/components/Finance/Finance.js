import React from 'react';
import {Header} from "../Finance/Header"
import {Balance} from "../Finance/balance"
import {IncomeExpenses} from "../Finance/incomeExpenses"
import {TransactionList} from "../Finance/transactionList"
import {AddTransaction} from "../Finance/addTransaction"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"

import './Finance.css';

function Finance({context}) {
  return  (
        <CardGroup className="appCol-xl-4 appCol-md-6 appCol-sm-12 mx-auto" >
          <Card >
            <Card.Header>Household Expenses</Card.Header>
            <Card.Body>
              <Balance context={context}/>  
              <IncomeExpenses context={context}/>
              <TransactionList context={context}/>
            </Card.Body>
          </Card>
          <AddTransaction context={context} />
        </CardGroup> 
  );
}

export default Finance;
