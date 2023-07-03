import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import PhoneDetails from "./PhoneDetails";

const phones = [
  {
    id: 1,
    name: "Galaxy S22 Ultra",
    brand: "Samsung",

    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRB0Oiwc0PfsYlOcrq1g-SB5m6_-Tq0dnGelT-njvR3vHUk_JP7832vl8kEStuf7gELcDZfNdHEtQHtkGMSbzUeUPla8fFtnZizu01YeGJSojZwqYYoRTmPJuG60rAg6Mx7-xnX&usqp=CAc",
    description:
      " The Samsung Galaxy S22 Ultra is the headliner of the S22 series",
  },
  {
    name: "Galaxy S23 Ultra",
    brand: "Samsung",
    id: 2,
    image:
      "//images.samsung.com/is/image/samsung/p6pim/levant/2302/gallery/levant-galaxy-s23-s918-sm-s918bzeqmea-thumb-534853002?$172_172_PNG$",
    description: "Meet Galaxy S23 Ultra 200MP Wide-Angle Camera & equipped",
  },
  {
    name: "Samsung Galaxy A53",
    brand: "Samsung",
    id: 3,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQAbNbk-VKfGCItJmlm5mhHTOUKQcEobH0nRGrwikE2Y_zXRCcCAWWIY6P-3UWI4Ny8ROALhzhvIBoOQJntcazlehLPiomApYV_2YSC9Vz3dcBL2hB1c_grhZZ_nIvZa7eatk&usqp=CAc",
    description: "Bright & Clear, Even In Sunlight, The 6.4 FHD+ Infinity-O ",
  },
  {
    name: "Galaxy A04s",
    brand: "Samsung",
    id: 4,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrbu6ONtlZYTDRWqVKiH2uPH8-PchCrBFMW-fqY8NJtd9siZOGOFIhDsLuy9wpbzOctsPT2GFcc2fbplDx5hpM2KE51yRtookv2ZDq8VRgoyYS6RGYc8xwTRVFoE4kwWy97A&usqp=CAc",
    description: "Samsung Galaxy A04s ; Type, PLS LCD, 90Hz, 400 nits (peak)",
  },

  {
    name: "Galaxy S23+",
    brand: "Samsung",
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGBX-oxa4s1QRgDNpaUIqGL9y1LAJibReg__uAIJocVd2MKOXLaYG80Pj8sGodiCh62AzrVmSD4iblN_GZZmhsK5Udoxo4ZhdVODWBJC9h0cXUN0Kj1lrII85RzHDk22diLQ&usqp=CAc",
    description:
      "The Samsung Galaxy S23+ is the bigger sibling of the regular Galaxy S23 ",
  },
  {
    name: "Galaxy Z Flip",
    brand: "Samsung",
    id: 6,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRKfge-zBOhxTsCw5ITmPRi-pGUt32injpI39Le29bYnLCH4BZoHaCHrmhq1eejBh9WCKqjo-N5TQ6z1E5MXGdFzGrrrqd5WSWjoAqFHy2ckOecMAop8UO5GQKj31MVZYMvMWg&usqp=CAc",
    description: "The Samsung Galaxy Z Flip is an Android-based foldable",
  },
  {
    name: "Galaxy Z Fold",
    brand: "Samsung",
    id: 7,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSWSJTKltxV1F6SeIqHwWgdcuKhHJV6oUnBad-xcPBwR40y0uNoiaorCZ2TZz0CFo2g5_hULHRsuOJLJtcQEgYFLhLOpKY8hLnZ9hq577h2v62ika3TPQ6Hxmb5Fzpt_r8Py6A&usqp=CAc",
    description: "Samsung Galaxy Fold Android smartphone. Announced Feb 2019",
  },
  {
    name: "Galaxy A04e",
    brand: "Samsung",
    id: 8,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuF62unXGK_RtRx3zZg5SJFMBv84oPKY1IxoMX65FsNRms7DUtnAHgTH_lCF4SU0-I7epFNCNv9e1sy5GXdpOpJu02v1BqU5E2LaPVuqup4bdPVdYlBS2oRribwrImINIqyEs&usqp=CAc",
    description: "Galaxy A04e features an Octa-core processor and up to 3/4GB",
  },
];

function Phones() {
  return (
    <Container className=" phones-container pt-5 mb-5">
      <h2 className="pb-4">Latest Phones For You</h2>
      <Row className=" d-flex justify-content-center align-items-center gap-3">
        {phones.map((phone) => (
          <Phone phoneObj={phone} />
        ))}
      </Row>
      <Row className=" d-flex justify-content-center align-items-center gap-3"></Row>
      <Button variant="dark" className="mt-3 px-5 py-2">
        See More
      </Button>
    </Container>
  );
}
export default Phones;

function Phone({ phoneObj }) {
  return (
    <Col className="text-center lg-4 md-6 sm-12 d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }} className="phone-card p-2 ">
        <Card.Img variant="top" src={phoneObj.image} />
        <Card.Body>
          <Card.Title>{phoneObj.name}</Card.Title>
          <Card.Text>{phoneObj.description}</Card.Text>
          <Button
            id={phoneObj.id}
            variant="dark"
            className=" p-2 w-50 addToCart-Button"
            href={`/phoneDetails/${phoneObj.id}`}
          >
            Show Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
