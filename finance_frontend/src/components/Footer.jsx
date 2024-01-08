import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="bottom">
      <Container>
        <Navbar.Brand href="/">X Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/terms">Terms of Service</Nav.Link>
            <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="https://www.facebook.com" target="_blank">
              Facebook
            </Nav.Link>
            <Nav.Link href="https://www.twitter.com" target="_blank">
              Twitter
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com" target="_blank">
              LinkedIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Row className="text-white py-3">
        <Col className="text-center">
          &copy; 2023 Stock Market. All rights reserved.
        </Col>
      </Row>
    </Navbar>
  );
}

export default Footer;