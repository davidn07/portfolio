import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Index() {
  return (
    <>
      <div className="container p-0">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">My Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Index;
