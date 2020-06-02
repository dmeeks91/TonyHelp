import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { LOGIN } from "../utils/actions";
import API from "../utils/API";

function Signup() {
    const [state, dispatch] = useStoreContext();
    const [user,setUser] = useState({username: "", password : "", email : ""});


    const handleChange = ({name, value}) =>{
        setUser({...user, [name] : value})
    }

    const handleClick = (e) => {
        e.preventDefault();
        API.signup(user)
            .then(function({data}) {
             
                const {_id, displayName, household_id, email, username} = data
                const user = {
                    _id,
                    displayName,
                    household_id,
                    email,
                    username
                }
                dispatch({
                    type: LOGIN,
                    user: user
                })
                console.log("Just signed up and this is our users id", user._id);
            })
    }

    return (
        (state.loggedin) ? <Redirect to="/myHomescreen"/> :
            <Card className="appCards col-6 m-auto mt-5">
                <Card.Header>Sign Up</Card.Header>
                <Card.Body className="p-auto ">
                    <Form className="p-4">
                        <Form.Group>
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control name="displayName" type="text" onChange={(e) => handleChange(e.target)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>UserName</Form.Label>
                            <Form.Control name="username" type="text" onChange={(e) => handleChange(e.target)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" onChange={(e) => handleChange(e.target)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="text" onChange={(e) => handleChange(e.target)} />
                        </Form.Group>
                        <Button className="mt-4" variant="primary" onClick={handleClick}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
    );
}

export default Signup;