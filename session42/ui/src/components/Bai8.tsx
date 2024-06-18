import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Bai8() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
