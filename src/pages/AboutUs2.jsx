import React from "react";
import { Container } from "react-bootstrap";
import "../assetss/css/AboutUs2.css";
const AboutUs2 = () => {
  return (
    <div>
      <Container>
        <ul id="cards">
          <li class="card-1" id="card_1">
            <div class="card__content">
              <div>
                <h2>Institute of Electrical and Electronics Engineering</h2>
                <p>
                  The Institute of Electrical and Electronics Engineering (IEEE)
                  is an international organization, which has been the nexus for
                  propagating scientific expertise among people all over the
                  globe. IEEE continues to attract students, faculty and
                  professionals from various fields all around the world and is
                  committed to incorporate diversity in thoughts which is
                  essential for scientific development. IEEE currently has
                  Student Branches at thousands of universities and colleges in
                  hundreds of countries throughout the world.
                </p>
                <p>
                  <a href="#top" class="btn btn--accent">
                    Read more
                  </a>
                </p>
              </div>
              <figure>
                <img
                  src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg"
                  alt="description"
                  className="img-fluid"
                />
              </figure>
            </div>
          </li>
          <li class="card-1" id="card_2">
            <div class="card__content">
              <div>
                <h2>PICT IEEE Student Branch</h2>
                <p>
                  PISB was established in the year 1998 with the aim of
                  inculcating the sense of technical awareness amongst its
                  student members. PISB endeavers to escalate the knowledge and
                  trends in the diverse field of technologies amongst its
                  members. PISB upholds two major events every year, Credenz and
                  Credenz Tech Dayz with the first one being conducted in the
                  even semester and the second one in the odd semester. PISB is
                  also marked by its Women in Engineering (WIE) chapter, an
                  initiative for impowerment of women in the technical domain.
                  PISB has been awarded the Best Student Branch of IEEE in Pune
                  section.
                </p>
                <p>
                  <a href="#top" class="btn btn--accent">
                    Read more
                  </a>
                </p>
              </div>
              <figure>
                <img
                  src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg"
                  alt="description"
                />
              </figure>
            </div>
          </li>
          <li class="card-1" id="card_3">
            <div class="card__content">
              <div>
                <h2>Card Three</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <a href="#top" class="btn btn--accent">
                    Read more
                  </a>
                </p>
              </div>
              <figure>
                <img
                  src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg"
                  alt="description"
                />
              </figure>
            </div>
          </li>
        </ul>{" "}
      </Container>
    </div>
  );
};

export default AboutUs2;
