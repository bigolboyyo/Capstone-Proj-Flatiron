import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

function Login({ onLogin, errorMessage }) {
  const [userCreds, setUserCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = async (e) => {
    const stateCopy = { ...userCreds };
    stateCopy[e.target.name] = e.target.value;
    setUserCreds(stateCopy);
  };

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(userCreds);
          setUserCreds({ username: "", password: "" });
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter username"
            value={userCreds.username}
            onChange={handleChange}
            required={true}
          />
          <Form.Text className="text-muted">Username must be unique</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={userCreds.password}
            onChange={handleChange}
            required={true}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Nav>
        <Nav.Item>
          Need an account?
          <Nav.Link href="/signup">SignUp</Nav.Link>
        </Nav.Item>
      </Nav>
      {errorMessage()}
    </div>
  );
}

export default Login;
