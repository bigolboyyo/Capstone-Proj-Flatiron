import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../AuthPage/Auth.css";

function Login({ onLogin, errorMessage, setAuth }) {
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
    <div className="form-div">
      Login
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(userCreds);
          setUserCreds({ username: "", password: "" });
        }}
      >
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalUserName"
        >
          <Form.Label column sm={{ span: 20 }}>
            Username:
          </Form.Label>
          <Col sm={{ span: 20 }}>
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter username"
              value={userCreds.username}
              onChange={handleChange}
              required={true}
            />
          </Col>
          {/* <Form.Text className="text-muted">Username must be unique</Form.Text> */}
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
          <Form.Label column sm={{ span: 20 }}>
            Password:
          </Form.Label>
          <Col sm={{ span: 20 }}>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={userCreds.password}
              onChange={handleChange}
              required={true}
            />
          </Col>
        </Form.Group>
        <Col sm={{ span: 10, offset: 5 }}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Form>
      <Nav>
        <Row>
          <Col sm={{ span: 20, offset: 1 }}>
            <Nav.Item className="auth-item">
              Need an account?
              <Nav.Link className="auth-link" onClick={() => setAuth(false)}>
                SignUp
              </Nav.Link>
            </Nav.Item>
          </Col>
        </Row>
      </Nav>
      {errorMessage()}
    </div>
  );
}

export default Login;
