import React, { useState } from 'react';
import { GlobalConsumer } from './context/globalState';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const AddTransaction = ({context}) => {
  const {addTransaction, members} = context
  
  const blankForm = {
    name:"",
    amount:0,
    isExpense: false,
    user: ""
  }

  const [newTransaction, setNewTransaction] = useState(blankForm);
  
  const handleChange = ({name, value}) => {

    newTransaction.isExpense = (name != "amount") ? newTransaction.isExpense : 
                               (+value < 0) ? true : false;

    setNewTransaction({
      ...newTransaction,
      [name]:(name === "amount") ? +value : value
    });
  }

  const onSubmit = () => {
    if (newTransaction.user === ""){
      console.log("no user defined")
      newTransaction.user = null
    }
    addTransaction(newTransaction);
    setNewTransaction(blankForm);
  }

  const getFirstOption = () => {
    return (!members.length) ? 
      <option>No Members Recorded</option> :
      <option value="">Select a member</option>
  }

  return (
        <Card >
          <Card.Header>Add a New Transaction</Card.Header>
          <Card.Body className="appForm">
            <Form>
            <Form.Group>
              <Form.Label>User</Form.Label>
              <Form.Control as="select" size="lg" onChange={(e) => handleChange(e.target)} name="user"custom>
                {getFirstOption()}
                { 
                  !members.length ? <></>:
                  (
                    members.map((member)=>{
                      return (
                        <option key={member._id} value={member._id} >
                          {member.displayName}
                        </option>
                      )
                    })
                  )
                }
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" onChange={(e) => handleChange(e.target)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control name="amount" type="text" onChange={(e) => handleChange(e.target)} />
            </Form.Group>
            <Button variant="primary" onClick={onSubmit}>
              Add Transaction
            </Button>
          </Form>
          </Card.Body>        
        </Card>
  )
}
