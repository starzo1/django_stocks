import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">X Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuth ? <Nav.Link href="/home">Home</Nav.Link> : null}
            <Nav.Link href="/prices">Prices</Nav.Link>
          </Nav>
          <Nav>
            {isAuth ? (
              <Nav.Link href="/logout">Logout</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;