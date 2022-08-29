import React from "react";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

export default function NavBar() {
  return (
    <div>
      <Navbar sticky="top" bg="black" variant="dark">
        <Navbar.Brand className="brand-name" href="/">
          <b>LOGO</b>
        </Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1 pe-5">
          <Nav.Item className="nav-align-text">
            <Nav.Link href="#work">
              WORK
              <span className="nav-align-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-align-text">
            <Nav.Link href="#services">
              SERVICES
              <span className="nav-align-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}
