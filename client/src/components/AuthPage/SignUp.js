import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUp({ onSignUp, errorMessage }) {
  const [signUpCreds, setSignUpCreds] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = async (e) => {
    const stateCopy = { ...signUpCreds };
    stateCopy[e.target.name] = e.target.value;
    setSignUpCreds(stateCopy);
  };

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSignUp(signUpCreds);
          setSignUpCreds({
            username: "",
            password: "",
            password_confirmation: "",
          });
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter username"
            value={signUpCreds.username}
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
            value={signUpCreds.password}
            onChange={handleChange}
            required={true}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            name="password_confirmation"
            type="password"
            placeholder="Password Confirmation"
            value={signUpCreds.password_confirmation}
            onChange={handleChange}
            required={true}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {errorMessage()}
    </div>
  );
}
export default SignUp;
