import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export function Navigation() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <div class="p-3 mb-2 bg-dark text-white">
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">X Market</Navbar.Brand>
          <Nav className="me-auto">
            {isAuth ? <Nav.Link href="/">Home</Nav.Link> : null}
            <Nav.Link href="/prices">Prices</Nav.Link>
          </Nav>
          <Nav>
            {isAuth ? <Nav.Link href="/logout">Logout</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>}
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}