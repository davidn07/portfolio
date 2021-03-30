import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Index() {
  return (
    <>
      <div className="container p-0">
        <Navbar className="transperent " expand="lg">
          <Navbar.Brand className="text-white" href="#home">
            My Site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="text-white" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                About
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                Services
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                Portfolio
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                Pricing
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                Blog
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Index;
