import React from "react";
import { Container, Carousel, Row } from "react-bootstrap";
import "../styles.css";
import "../assets/css/carouselAnimation.css";

const AboutUs1 = () => {
  return (
    <div className="body-ContactUs pb-5">
      <Container>
        <Row className=" justify-content-center">
          {/* <HeadingAnimation /> */}
          <h1>About Us</h1>
          <p
            className="lead justify-content-center text-justify"
            style={{ fontWeight: 400, width: "85%" }}
          >
            Credenz Tech Dayz (CTD) is organized by the PICT IEEE Student Branch
            annually, in the even semester, to coincide with the IEEE membership
            drive. CTD brings with it a gusto that is portrayed in the form of
            seminars by esteemed industrialists. These seminars provide a
            platform wherein the students are exposed to the latest innovations
            in technology. They also get an opportunity to interact with experts
            from the industry, thus giving them further insights into and
            helping them to develop their skills in the technical field.
            Seminars are organized as a part of CTD ’20. The seminars on
            “Competitive Coding” and “Applied Machine Learning” drew deep
            interest from the students and were also immensely appreciated.
            Apart from the seminars, competitive technical events such as the
            National Computing Contest (NCC) and Network Treasure Hunt will be
            held to give CTD a technical hand. Take your wits and expertise to
            the next level in non technical events like Unravel and InQUIZitve.
          </p>
        </Row>
      </Container>
      {/* CAROUSEL */}
      <Container fluid style={{ height: "100%", backgroundColor: "inherit" }}>
        <Carousel controls={false} interval={null} style={{ height: "100%" }}>
          <Carousel.Item>
            <div className="carousel-body container-fluid ">
              {/* <Image className='d-block w-100' src={src} alt='First slide' /> */}
              <Carousel.Caption
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                <div className="carousel-text gradient-border">
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
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-body container-fluid">
              {/* <Image className='d-block w-100' src={src} alt='First slide' /> */}
              <Carousel.Caption
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                <div className="carousel-text gradient-border">
                  <div className="carousel-text-inner">
                    <h3 className="carousel-heading">
                      PICT IEEE Student Branch (PISB)
                    </h3>
                    <p className="lead text-justify">
                      PISB was established in the year 1998 with the aim of
                      inculcating the sense of technical awareness amongst its
                      student members. PISB endeavers to escalate the knowledge
                      and trends in the diverse field of technologies amongst
                      its members. PISB upholds two major events every year,
                      Credenz and Credenz Tech Dayz with the first one being
                      conducted in the even semester and the second one in the
                      odd semester. PISB is also marked by its Women in
                      Engineering (WIE) chapter, an initiative for impowerment
                      of women in the technical domain. PISB has been awarded
                      the Best Student Branch of IEEE in Pune section.
                    </p>
                  </div>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-body container-fluid">
              {/* <Image
                className='d-block w-100 img-fluid'
                src={src}
                alt='First slide'
              /> */}
              <Carousel.Caption
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                <div className="carousel-text gradient-border">
                  <div className="carousel-text-inner">
                    <h3 className="carousel-heading ">
                      PICT IEEE NEWSLETTER GROUP (P.I.N.G.)
                    </h3>
                    <p className="lead text-justify">
                      P.I.N.G. (PICT IEEE Newsletter Group) is the official
                      technical magazine of PISB. P.I.N.G. serves as a platform
                      for individuals to portray their technical ingenuity. It
                      highlights articles on cutting-edge technologies from
                      technocrats all around the globe including students,
                      industrialists and faculty members. P.I.N.G. serves as a
                      platform for individuals to portray their technical
                      ingenuity. It highlights articles on cutting-edge
                      technologies from technocrats all around the globe
                      including students, industrialists and faculty members. It
                      also features interviews of distinguished personalities in
                      various technical domains.
                    </p>
                  </div>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default AboutUs1;
