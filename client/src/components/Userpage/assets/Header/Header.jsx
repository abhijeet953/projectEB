import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoUrl from "../../../assets/logo.svg";
import './Header.css'
function CollapsibleExample() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
      className="nav-sm"
    >
      <Container>
        <Navbar.Brand href="#home">
          EarnBazaar
          <img
            alt=""
            src={logoUrl}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={<i class="fa-regular fa-user profileIcon"> <i className="profileText"> Profile</i> </i>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
