import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
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
    <>
      <Navbar className="navbar" fixed="top">
        <Container fluid>
          <h1 className="nav-title">Robot Text Adventure</h1>
        </Container>
      </Navbar>

      {/* <div className="auth-page"> */}
      <div className="auth-page-wrapper">
        <div className="form-div">
          <div className="form-wrapper">
            <p style={{ textAlignLast: "center" }}>Login</p>
            <Form
              className="boot-form"
              onSubmit={(e) => {
                e.preventDefault();
                onLogin(userCreds);
                setUserCreds({ username: "", password: "" });
              }}
            >
              {/* <div> */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalUserName"
              >
                <Form.Label column sm="auto">
                  Username:
                </Form.Label>
                <Col sm={20}>
                  <Form.Control
                    className="form-control"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={userCreds.username}
                    onChange={handleChange}
                    required={true}
                    size="lg"
                  />
                </Col>
                {/* <Form.Text className="text-muted">Username must be unique</Form.Text> */}
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Label column sm="auto">
                  Password:
                </Form.Label>
                <Col sm={20}>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    value={userCreds.password}
                    onChange={handleChange}
                    required={true}
                    size="lg"
                  />
                </Col>
                <Col sm={{ span: 10, offset: 4 }}>
                  <button className="auth-submit" type="submit">
                    Submit
                  </button>
                </Col>
              </Form.Group>
              {/* </div> */}
              <Nav>
                <Row>
                  <Col sm="auto">
                    <Nav.Item className="auth-item">
                      Need an account?
                      <Nav.Link
                        className="auth-link"
                        onClick={() => setAuth(false)}
                      >
                        SignUp
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                </Row>
              </Nav>
            </Form>
          </div>
          {errorMessage()}
        </div>
      </div>
      {/* </div> */}
      {/* {errorMessage()} */}
    </>
  );
}

export default Login;
