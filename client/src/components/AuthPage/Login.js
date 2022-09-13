import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login({ onLogin, errors }) {
  const [userCreds, setUserCreds] = useState({
    username: "",
    password: "",
  });
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

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
      {errors
        ? errors.map((e, i) => {
            return <h1>{e}</h1>;
          })
        : null}
    </div>
  );
}

export default Login;
