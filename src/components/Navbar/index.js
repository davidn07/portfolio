import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

function Index() {
  return (
    <>
      <div className="container p-0">
        <Navbar
          className="transperent fixed-top"
          style={{
            background:
              "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )",
          }}
          expand="lg"
        >
          <Navbar.Brand className="text-white" href="#home">
            My Site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="text-white">
                <Link to="home" smooth={true}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                <Link to="about" smooth={true}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                Blog
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                <Link to="contact" smooth={true}>
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Index;
