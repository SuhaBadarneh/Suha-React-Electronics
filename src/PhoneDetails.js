import React from "react";
import ReactDOM from "react-dom/client";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.css";
import { useParams } from "react-router-dom";
const phones = [
  {
    id: 1,
    name: "Galaxy S22 Ultra",
    brand: "Samsung",

    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRB0Oiwc0PfsYlOcrq1g-SB5m6_-Tq0dnGelT-njvR3vHUk_JP7832vl8kEStuf7gELcDZfNdHEtQHtkGMSbzUeUPla8fFtnZizu01YeGJSojZwqYYoRTmPJuG60rAg6Mx7-xnX&usqp=CAc",
    description:
      " The Samsung Galaxy S22 Ultra is the headliner of the S22 series. It's the first S series phone to include Samsung's S Pen. Specifications are top-notch including 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 1 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage",
  },
  {
    name: "Galaxy S23 Ultra",
    brand: "Samsung",
    id: 2,
    image:
      "//images.samsung.com/is/image/samsung/p6pim/levant/2302/gallery/levant-galaxy-s23-s918-sm-s918bzeqmea-thumb-534853002?$172_172_PNG$",
    description:
      "Meet Galaxy S23 Ultra 200MP Wide-Angle Camera & equipped with long-lasting 5000mAh battery. Discover Galaxy S23 Ultra Equipped With 5 Cameras, Super Fast Processing & Built-In S Pen. 5,000mAh Battery. S PEN. Fast Charger. 12MP Selfie Camera",
  },
  {
    name: "Samsung Galaxy A53",
    brand: "Samsung",
    id: 3,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQAbNbk-VKfGCItJmlm5mhHTOUKQcEobH0nRGrwikE2Y_zXRCcCAWWIY6P-3UWI4Ny8ROALhzhvIBoOQJntcazlehLPiomApYV_2YSC9Vz3dcBL2hB1c_grhZZ_nIvZa7eatk&usqp=CAc",
    description:
      "Bright & Clear, Even In Sunlight, The 6.4 FHD+ Infinity-O display offers a vibrant view. Hold On To Your Memories With 256GB Of Internal Storage Plus Support For a MicroSD Card. Battery 5,000 mAh. 120Hz Super AMOLED Screen. 108MP OIS Camera",
  },
  {
    name: "Galaxy A04s",
    brand: "Samsung",
    id: 4,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrbu6ONtlZYTDRWqVKiH2uPH8-PchCrBFMW-fqY8NJtd9siZOGOFIhDsLuy9wpbzOctsPT2GFcc2fbplDx5hpM2KE51yRtookv2ZDq8VRgoyYS6RGYc8xwTRVFoE4kwWy97A&usqp=CAc",
    description:
      "Samsung Galaxy A04s ; Type, PLS LCD, 90Hz, 400 nits (peak) ; Size, 6.5 inches, 102.0 cm2 (~80.7% screen-to-body ratio) ; Resolution, 720 x 1600 pixels",
  },

  {
    name: "Galaxy S23+",
    brand: "Samsung",
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGBX-oxa4s1QRgDNpaUIqGL9y1LAJibReg__uAIJocVd2MKOXLaYG80Pj8sGodiCh62AzrVmSD4iblN_GZZmhsK5Udoxo4ZhdVODWBJC9h0cXUN0Kj1lrII85RzHDk22diLQ&usqp=CAc",
    description:
      "The Samsung Galaxy S23+ is the bigger sibling of the regular Galaxy S23 with it's 6.6-inch Dynamic AMOLED display with 120Hz refresh rate",
  },
  {
    name: "Galaxy Z Flip",
    brand: "Samsung",
    id: 6,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRKfge-zBOhxTsCw5ITmPRi-pGUt32injpI39Le29bYnLCH4BZoHaCHrmhq1eejBh9WCKqjo-N5TQ6z1E5MXGdFzGrrrqd5WSWjoAqFHy2ckOecMAop8UO5GQKj31MVZYMvMWg&usqp=CAc",
    description:
      "The Samsung Galaxy Z Flip is an Android-based foldable smartphone developed by Samsung Electronics as part of the Samsung Galaxy Z series",
  },
  {
    name: "Galaxy Z Fold",
    brand: "Samsung",
    id: 7,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSWSJTKltxV1F6SeIqHwWgdcuKhHJV6oUnBad-xcPBwR40y0uNoiaorCZ2TZz0CFo2g5_hULHRsuOJLJtcQEgYFLhLOpKY8hLnZ9hq577h2v62ika3TPQ6Hxmb5Fzpt_r8Py6A&usqp=CAc",
    description:
      "Samsung Galaxy Fold Android smartphone. Announced Feb 2019. Features 7.3″ display, Snapdragon 855 chipset, 4380 mAh battery, 512 GB storage, 12 GB RAM",
  },
  {
    name: "Galaxy A04e",
    brand: "Samsung",
    id: 8,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuF62unXGK_RtRx3zZg5SJFMBv84oPKY1IxoMX65FsNRms7DUtnAHgTH_lCF4SU0-I7epFNCNv9e1sy5GXdpOpJu02v1BqU5E2LaPVuqup4bdPVdYlBS2oRribwrImINIqyEs&usqp=CAc",
    description:
      "Galaxy A04e features an Octa-core processor and up to 3/4GB of RAM for fast and efficient performance for the task at hand. You can also add up to 1TB of",
  },
  //   {
  //     name: "Find X3 Pro",
  //     brand: "OPPO",
  //     id: 9,
  //     image: "findx3pro.jpg",
  //     description:
  //       "OPPO's premium phone with a vibrant display, versatile camera system, and fast charging capabilities.",
  //   },
];
export default function PhoneDetails() {
  const { id } = useParams();
  const clickedPhone = phones.filter((phone) => phone.id === parseInt(id))[0];
  return (
    <Container>
      <Row className="phone-details">
        <Col md={6} className="">
          <img
            src={clickedPhone.image}
            style={{ width: "60%", height: "60%" }}
            alt="not found"
          />
        </Col>
        <Col md={6} className="d-flex flex-column gap-2 align-items-center">
          {/* Content for the left column */}
          <h1>{clickedPhone.name}</h1>
          <p>{clickedPhone.description}</p>

          <Button variant="dark" className=" p-2 w-25">
            Add To Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
