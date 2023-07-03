import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Homepage from "./Homepage";
import Categories from "./Categories";
import Phones from "./Phones";
import Footer from "./Footer";
import PhoneDetails from "./PhoneDetails";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FirsrAndLastName from "./FirsrAndLastName";

function Header() {
  return (
    <Navbar className="header-nav " expand="lg" sticky="top">
      <Navbar.Brand className=" logo fs-2 ps-3 text-light" href="/">
        SHOPLAND
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="me-auto d-flex gap-2 ms-5 ">
          <Nav.Link
            className=" nav-link text-light  d-flex justify-content-center align-items-center"
            href="/"
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="nav-link text-light  d-flex justify-content-center align-items-center"
            href="/Products"
          >
            Products
          </Nav.Link>

          <Nav.Link
            className="nav-link text-light  d-flex justify-content-center align-items-center"
            href="/FirsrAndLastName"
          >
            Details
          </Nav.Link>
          <Nav.Link
            className="nav-link text-light  d-flex justify-content-center align-items-center"
            href="#link"
          >
            About
          </Nav.Link>
          <Nav.Link
            className="nav-link text-light  d-flex justify-content-center align-items-center"
            href="#link"
          >
            Contact
          </Nav.Link>
          <InputGroup className="  d-flex justify-content-center align-items-center">
            <InputGroup.Text id="basic-addon1">search</InputGroup.Text>
            <Form.Control
              placeholder="Search Here"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
