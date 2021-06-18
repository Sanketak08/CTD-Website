import React from "react";
import "../assets/css/eventcard.css";

const EventCard2 = () => {
  return (
    <div className="container1">
      <div className="card1">
        <div className="imgBx">
          <img
            alt="Event LOGO"
            src="https://source.unsplash.com/random/200x200"
          />
        </div>
        <div className="contentBx">
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
