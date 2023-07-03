import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Link } from "react-router-dom";
import Phones from "./Phones";
const CategoriesEl = [
  { id: 1, name: "Phones", image: "images/phones.jpg" },

  {
    id: 2,
    name: "Laptops",
    image: "images/laptops-computers.jpg",
  },

  {
    id: 3,
    name: "Cameras",
    image: "images/camera.jpg",
  },

  { id: 4, name: "Gaming", image: "images/gaming.jpg" },

  {
    id: 5,
    name: "FlyCam",
    image: "images/flycam.jpg",
  },
  {
    id: 6,
    name: "Headphones",
    image: "images/headphones.jpg",
  },
  {
    id: 7,
    name: "Laptops",
    image: "images/laptops-computers.jpg",
  },
  { id: 8, name: "Phones", image: "images/phones.jpg" },
];
function Categories() {
  return (
    <Container className=" category-container pt-5 mb-5">
      <h2 className="pb-4 text-center">Best Products For You</h2>
      <Row>
        {CategoriesEl.map((category) => (
          <Category categoryObj={category} key={category.name} />
        ))}
      </Row>
    </Container>
  );
}

export default Categories;

function Category({ categoryObj }) {
  return (
    <Col className="text-center ">
      <a href="/Phones" className="category-col">
        <img
          className="rounded-circle mb-3"
          src={categoryObj.image}
          alt="not found"
        ></img>
        <h5>{categoryObj.name}</h5>
      </a>
    </Col>
  );
}
