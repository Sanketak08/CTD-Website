import React from "react";
import { Row, Card } from "react-bootstrap";

const EventCard = (props) => {
  return (
    <Card className="event-card margin-res" style={{ width: "17rem" }}>
      <Card.Body>
        <div className="eventIconWrapper d-flex justify-content-center">
          <img
            src="https://source.unsplash.com/random/200x200"
            alt="Event Icon"
            className="eventIcon1 rounded-circle mt-3"
          />
        </div>
        <div className="mt-5 eventNameWrapper">
          <div
            className="h3 eventName"
            style={{ fontWeight: "300", lineHeight: "1.2" }}
          >
            {props.name}
          </div>
        </div>
        {/* <div className='eventDetailsWrapper'>
          <div className='eventDetails text-justify'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              similique fugit nesciunt temporibus molestiae sit, cumque
              architecto velit, ex ratione explicabo suscipit ullam, maiores a.
              Architecto recusandae aspernatur aut! Rerum.
            </p>
          </div>
        </div> */}
        {/* <div>
          <div className='eventButtonWrapper d-flex justify-content-start'>
            <button className='btn btn-primary eventButton'>View</button>
          </div>
          <div className='eventButtonWrapper d-flex justify-content-end'>
            <button className='btn btn-danger eventButton'>Cancel</button>
          </div>
        </div> */}
        <Row className="justify-content-between px-3 mt-5">
          <button className="btn btn-primary eventButton">View</button>
          <button className="btn btn-danger eventButton">Cancel</button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
