import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={3} lg={4}>
            <h3>ShopLand</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
              Sit, quasi? Ad maiores nihil voluptatibus amet
              <br /> ipsam nemo dignissimos sed commodi vero cumque
              <br /> quae dolorum, minus officia. Optio dolor odit natus.
            </p>
          </Col>
          <Col xs={12} md={3} lg={4}>
            <h5>More From LaptopLand</h5>
            <ul className="footer-useful-links d-flex flex-column gap-2">
              <li>Our Story</li>
              <li>Blog</li>
              <li>Proucts</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col xs={12} md={3} lg={4}>
            <h5>Let's Stay Connected</h5>
            <p>Enter your Email to unlock 10% OFF</p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter Your Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
