import { Navbar, Nav } from "react-bootstrap";
import CTDlogo from "../../assets/img/ctd.png";
import { Link } from "react-router-dom";
import "./Nav.css";

const NavigationBar = () => {
  return (
    <Navbar className="nav-bar p1 sticky-top" collapseOnSelect expand="lg">
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
          <Link className="na-link" to="/login">
            Login
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
