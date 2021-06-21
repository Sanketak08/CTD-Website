import React from "react";
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import CTDlogo from "../../assets/img/ctd.png";
import { Link } from "react-router-dom";
import "./Nav.css";
import { isLogin } from "../../components/utils/index";

const NavigationBar = () => {
  if (isLogin()) {
    return (
      <Navbar className="nav-bar" collapseOnSelect expand="xl">
        <Navbar.Brand>
          <Link to="/">
            <img alt="CTDLOGO" src={CTDlogo} className="logo" width="100px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link className="na-link" to="/">
              Home
            </Link>
            <Link className="na-link" to="/events">
              Events
            </Link>
            <Link className="na-link" to="ContactUs">
              Contact
            </Link>
            <Link className="na-link" to="my-profile">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">My name</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/my-profile">My Profile</Dropdown.Item>
                  <Dropdown.Item href="#">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  return (
    <Navbar className="nav-bar" collapseOnSelect expand="xl">
      <Navbar.Brand>
        <Link to="/">
          <img alt="CTDLOGO" src={CTDlogo} className="logo" width="100px" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <a className="na-link" href="/">
            Home
          </a>
          <a className="na-link" href="/events">
            Events
          </a>
          <a className="na-link" href="#">About</a>
          <a className="na-link" href="/ContactUs">
            Contact
          </a>
          
        </Nav>
        <Link className="na-link login" to="/login">
          <Button size="lg">Login</Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
