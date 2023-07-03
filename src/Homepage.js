import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
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

function Landing() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="homepage ">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/landing04.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="homepage-caption">
              <h3>Sales On cameras</h3>
              <p>
                Unleash your creativity with our remarkable cameras. Now, with
                up to 20% off, seize the opportunity to capture your world in
                stunning detail
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/landing02.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="homepage-caption">
              <h3 style={{ color: "black" }}>Sales On Laptops</h3>
              <h1 style={{ color: "black" }}>Sales UP TO 20%</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/landing03.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="homepage-caption">
              <h3>Best Phones Brands For You</h3>
              <h2>Amazing Offers Waiting For You</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Categories />
    </>
  );
}

export default Landing;

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
