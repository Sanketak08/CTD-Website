/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import CTDlogo from "../../assets/img/ctd.png";
import { Link } from "react-router-dom";
import "./Nav.css";
import { isLogin } from "../../components/utils/index";
import { HashLink } from "react-router-hash-link";

const NavigationBar = () => {
  if (isLogin()) {
    return (
      <Navbar
        className="nav-bar"
        collapseOnSelect
        expand="xl"
        variant="dark"
        sticky
      >
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
            <HashLink className="na-link" to="/About/#section-aboutCTD">
              About
            </HashLink>
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
    <Navbar
      className="nav-bar"
      collapseOnSelect
      expand="xl"
      variant="dark"
      sticky="top"
    >
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
          <HashLink className="na-link" to="/About/#section-aboutCTD">
            About
          </HashLink>
          <Link className="na-link" to="/events">
            Events
          </Link>
          <Link className="na-link" to="/ContactUs">
            Contact
          </Link>
          <Link className="na-link" to="/my-profile">
            Profile
          </Link>
        </Nav>
        <Link className="na-link login" to="/login">
          <Button size="lg" variant="link">
            Login
          </Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
