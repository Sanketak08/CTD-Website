import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../assets/css/eventcard.css";
import ProfileModal from "./ProfileModal";

const EventCard2 = () => {
  //   const handleView = (e) => {
  //     alert(e);
  //   };
  const [visible, setVisible] = useState(false);
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
            <Button
              className="details-btn-profile"
              onClick={() => setVisible(true)}
            >
              View
            </Button>
            <ProfileModal show={visible} onHide={() => setVisible(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard2;
