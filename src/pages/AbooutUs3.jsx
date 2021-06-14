import React from "react";
import { Container, Carousel, Row, Col, Image } from "react-bootstrap";
import "../styles.css";
import "../assets/css/carouselAnimation1.css";
import IEEE_logo from "../assets/img/IEEE-logo.png";
import PISB_logo from "../assets/img/PISB-logo1.jpg";
import PING_logo from "../assets/img/ping1.png";
import { useRef } from "react";

const AboutUs1 = () => {
  //   const slider = document.querySelector(".gallery");
  let isDown = false;
  let startX;
  let scrollLeft;
  const sliderRef = useRef();
  const slider = sliderRef.current;
  console.log(slider);

  const handleMouseDown = (e) => {
    isDown = true;
    console.log(e);
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  const handleMouseLeave = (e) => {
    isDown = false;
    slider.classList.remove("active");
  };
  const handleMouseUp = (e) => {
    isDown = false;
    slider.classList.remove("active");
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="aboutUs">
      <Container>
        <Row className="d-flex justify-content-center">
          {/* <HeadingAnimation /> */}
          <Row>
            <h1>About Us</h1>
          </Row>
          <Row className="d-flex justify-content-center mt-3">
            <p
              className="lead text-justify"
              style={{ fontWeight: 400, width: "85%" }}
            >
              Credenz Tech Dayz (CTD) is organized by the PICT IEEE Student
              Branch annually, in the even semester, to coincide with the IEEE
              membership drive. CTD brings with it a gusto that is portrayed in
              the form of seminars by esteemed industrialists. These seminars
              provide a platform wherein the students are exposed to the latest
              innovations in technology. They also get an opportunity to
              interact with experts from the industry, thus giving them further
              insights into and helping them to develop their skills in the
              technical field. Seminars are organized as a part of CTD ’20. The
              seminars on “Competitive Coding” and “Applied Machine Learning”
              drew deep interest from the students and were also immensely
              appreciated. Apart from the seminars, competitive technical events
              such as the National Computing Contest (NCC) and Network Treasure
              Hunt will be held to give CTD a technical hand. Take your wits and
              expertise to the next level in non technical events like Unravel
              and InQUIZitve.
            </p>
          </Row>
        </Row>
      </Container>
      {/* CAROUSEL */}
      <Row>
        <Container fluid style={{ height: "100%", backgroundColor: "inherit" }}>
          <ul
            class="gallery"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <li style={{ background: "#f6bd60" }}>
              <Row>
                <Col md={8}>
                  <div className="carousel-text-inner">
                    <h3 className="carousel-heading">
                      Institute of Electrical and Electronics Engineering
                    </h3>
                    <p className="lead text-justify">
                      The Institute of Electrical and Electronics Engineering
                      (IEEE) is an international organization, which has been
                      the nexus for propagating scientific expertise among
                      people all over the globe. IEEE continues to attract
                      students, faculty and professionals from various fields
                      all around the world and is committed to incorporate
                      diversity in thoughts which is essential for scientific
                      development. IEEE currently has Student Branches at
                      thousands of universities and colleges in hundreds of
                      countries throughout the world.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <img
                    src={IEEE_logo}
                    style={{ height: "250px" }}
                    alt="IEEE img"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </li>
            <li style={{ background: "#f7ede2" }}>
              <Row>
                <Col md={8}>
                  <div className="carousel-text-inner">
                    <h3 className="carousel-heading">
                      Institute of Electrical and Electronics Engineering
                    </h3>
                    <p className="lead text-justify">
                      The Institute of Electrical and Electronics Engineering
                      (IEEE) is an international organization, which has been
                      the nexus for propagating scientific expertise among
                      people all over the globe. IEEE continues to attract
                      students, faculty and professionals from various fields
                      all around the world and is committed to incorporate
                      diversity in thoughts which is essential for scientific
                      development. IEEE currently has Student Branches at
                      thousands of universities and colleges in hundreds of
                      countries throughout the world.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <img
                    src={IEEE_logo}
                    style={{ height: "250px" }}
                    alt="IEEE img"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </li>
            <li style={{ background: "#f5cac3" }}>
              <Row>
                <Col md={8}>
                  <div className="carousel-text-inner">
                    <h3 className="carousel-heading">
                      Institute of Electrical and Electronics Engineering
                    </h3>
                    <p className="lead text-justify">
                      The Institute of Electrical and Electronics Engineering
                      (IEEE) is an international organization, which has been
                      the nexus for propagating scientific expertise among
                      people all over the globe. IEEE continues to attract
                      students, faculty and professionals from various fields
                      all around the world and is committed to incorporate
                      diversity in thoughts which is essential for scientific
                      development. IEEE currently has Student Branches at
                      thousands of universities and colleges in hundreds of
                      countries throughout the world.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <img
                    src={IEEE_logo}
                    style={{ height: "250px" }}
                    alt="IEEE img"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </li>
          </ul>
        </Container>
      </Row>
    </div>
  );
};

export default AboutUs1;
