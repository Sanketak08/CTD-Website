import React from "react";
import "../assets/css/contactCard1.css";
const ContactCard1 = ({ name, link, number }) => {
  return (
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="our-team">
          <div class="picture">
            <img
              class="img-fluid"
              src="https://source.unsplash.com/random/200x200"
              alt="sampleIMg"
            />
          </div>
          <div class="team-content">
            <h3 class="name">{name}</h3>
            <h4 class="number">{number}</h4>
          </div>
          <ul class="social">
            <li>{/* Link here */}</li>
            <li>{/* link here */}</li>
            <li>{/* link here */}</li>
            <li>{/* link here */}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactCard1;
