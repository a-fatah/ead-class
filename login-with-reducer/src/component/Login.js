import React, { useState, useContext } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthContext from "../Context";
import Alert from "react-bootstrap/Alert";

export default () => {
  const [credentials, setCredentials] = useState({});
  const { state, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    const { username, password } = credentials;

    dispatch({ type: "login", payload: { username, password } });
  };

  return (
    <div className="w-25">
      <h3 className="display-5 text-center">Login</h3>
      {state.error ? <Alert variant="danger">{state.error}</Alert> : ""}
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" onChange={handleChange} />
      </Form.Group>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};
