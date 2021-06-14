import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CTDlogo from "../../assets/img/ctd.png";
import { Link } from "react-router-dom";
import "./Nav.css";

const NavigationBar = () => {
  const [navbar, setNavbar] = React.useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Navbar
      className={
        navbar ? "active nav-bar p1 sticky-top" : "nav-bar p1 sticky-top"
      }
      collapseOnSelect
      expand="lg"
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
          <Link className="na-link" to="/AboutUs">
            About
          </Link>
          <Link className="na-link" to="/events">
            Events
          </Link>
          <Link className="na-link" to="#">
            Sponsors
          </Link>
          <Link className="na-link" to="ContactUs">
            Contact
          </Link>
          <Link className="na-link" to="my-profile">
            Profile
          </Link>
          <Link className="na-link" to="/login">
            Login
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
