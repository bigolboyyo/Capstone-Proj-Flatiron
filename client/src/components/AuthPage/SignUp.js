import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../AuthPage/Auth.css";

function SignUp({ onSignUp, errorMessage, setAuth }) {
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
    <>
      <Navbar fixed="top">
        <Container fluid>
          <h1 className="nav-title">Robot Text Adventure</h1>
        </Container>
      </Navbar>
      <div className="form-div">
        SignUp
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
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalUserName"
          >
            <Form.Label>Username:</Form.Label>
            <Col sm={{ span: 20 }}>
              <Form.Control
                name="username"
                type="text"
                placeholder="Enter username"
                value={signUpCreds.username}
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
                placeholder="Enter Password"
                value={signUpCreds.password}
                onChange={handleChange}
                required={true}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formBasicPasswordConfirmation"
          >
            <Form.Label column sm={{ span: 20 }}>
              Password Confirmation:
            </Form.Label>
            <Col sm={{ span: 20 }}>
              <Form.Control
                name="password_confirmation"
                type="password"
                placeholder="Password Confirmation"
                value={signUpCreds.password_confirmation}
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
          <Nav.Item className="auth-item">
            Have an account already?
            <Nav.Link className="auth-link" onClick={() => setAuth(true)}>
              Login
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {errorMessage()}
      </div>
    </>
  );
}
export default SignUp;
