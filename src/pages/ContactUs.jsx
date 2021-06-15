import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles.css";
import ContactCard1 from "../components/ContactCard1";
const ContactUs = () => {
  return (
    <div className="body-ContactUs py-5">
      <Container style={{ marginBottom: "100px" }}>
        {/* <Row className='headingContactUs justify-content-center mb-5'>
          <HeadingAnimation />
          <div className='heading-aboutUs display-3 mb-5'>About Us</div>
        </Row> */}
        <Row
          data-aos="fade-up"
          data-aos-duration="1000"
          className="d-flex justify-content-center"
        >
          <Col className="mt-3 d-flex justify-content-center">
            <ContactCard1
              name="John Green"
              number="+91 7651123428"
              link1="johngreen@gmail.com"
            />
          </Col>
          <Col className="mt-3 d-flex justify-content-center">
            <ContactCard1
              name="Alan Becker"
              number="+91 9876653213"
              link1="abecker@gmail.com"
            />
          </Col>
          <Col className="mt-3 d-flex justify-content-center">
            <ContactCard1
              name="David Wallace"
              number="+91 83133337421"
              link1="david@dm.com"
            />
          </Col>
        </Row>
      </Container>
      <Row>
        <Col
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          style={{ height: "500px", backgroundColor: "inherit", padding: "0" }}
          className="d-flex justify-content-center"
        >
          <iframe
            title="googleMapsApi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254206!2d73.84864491471969!3d18.457542087445745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1604491302435!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="shadow-lg google-maps width"
          ></iframe>{" "}
          {/* <Image src='https://source.unsplash.com/random/700x500' fluid /> */}
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
