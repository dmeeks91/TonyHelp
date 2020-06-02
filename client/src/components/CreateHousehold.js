import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const CreateHousehold = ({context}) => {
  const {createHousehold} = context;

  const [isValid, setIsValid] = useState(false);

  const [newHousehold, setnewHousehold] = useState({
    name:"",
  });
  
  const handleChange = ({name, value}) => {
    setIsValid(value.length > 0)
    setnewHousehold({
      [name]: value
    });
  }

  const onSubmit = () => {
    createHousehold(newHousehold);
  }

  return (
        <Card >
          <Card.Header>Create A New Household</Card.Header>
          <Card.Body>
            <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" onChange={(e) => handleChange(e.target)} />
            </Form.Group>
            <Button variant="join" disabled={!isValid} onClick={onSubmit}>
              Create Household
            </Button>
          </Form>
          </Card.Body>        
        </Card>
  )
}