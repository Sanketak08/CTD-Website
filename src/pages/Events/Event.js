import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../axios";
import DetailsModal from "./DetailsModal";

const Event = (props) => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.id);

    axiosInstance
      .post("/place_order/", {
        eventID: props.id,
      })
      .then((res) => {
        console.log(res.data.detail);
        alert(res.data.detail);
        history.push("/events");
        console.log(res.status);
      });
  };

  return (
    <div className="event ">
      <Container fluid>
        <Row>
          <Col lg={4} sm={12}>
            <img alt="Event LOGO" src={props.icon} />
            <h4>{props.eventName}</h4>
          </Col>
          <Col lg={6} sm={12}>
            <p>{props.info}</p>
            <div>
              <Button
                className="buttons"
                onClick={() => setModalShow(true)}
                variant="outline-light"
              >
                Details
              </Button>

              <DetailsModal
                eventName={props.eventName}
                logo={props.icon}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              <Button
                className="buttons"
                variant="outline-light"
                onClick={handleSubmit}
              >
                Register
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <div class="container1">
        <div class="card1">
          <div class="imgBx">
            <img
              alt="Event LOGO"
              src="https://source.unsplash.com/random/200x200"
            />
          </div>
          <div class="contentBx">
            <h3>{props.eventName}</h3>
            <Button variant="outline-light">Details</Button>
            <Button variant="light">Register</Button>
            
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Event;
