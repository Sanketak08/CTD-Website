import React from "react";
import "../assets/css/eventcard.css";

const EventCard2 = () => {
  return (
    <div class="container1">
      <div class="card1">
        <div class="imgBx">
          <img
            alt="Event LOGO"
            src="https://source.unsplash.com/random/200x200"
          />
        </div>
        <div class="contentBx">
          <div className="mt-3 mb-4">
            <a alt="Button" href="!3">
              View
            </a>
          </div>
          <div>
            <a alt="Button" href="!3">
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard2;
