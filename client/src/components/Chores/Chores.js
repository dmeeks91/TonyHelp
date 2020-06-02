import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import  Card  from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Chores({context}) {
  
  return (
    <CardGroup className="appCol-xl-4 appCol-md-6 appCol-sm-12 mx-auto" >
      <Card >
        <Card.Header>
          Create A Chore
        </Card.Header>
        <Card.Body className="appForm">
          <TodoForm context={context} />
        </Card.Body>
      </Card>
      <Card >
        <Card.Header>
          Chore List
        </Card.Header>
        <Card.Body>
          <TodoList context={context} />
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Chores;
