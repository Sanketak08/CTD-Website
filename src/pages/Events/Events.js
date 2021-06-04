import "./Events.css";
import Event from "./Event";
import Inquizitive from "./icons/inquizitive.png";
import NCC from "./icons/NCC.png";
import { Container, Row, Col } from "react-bootstrap";

const Events = () => {
  const nccBasicInfo =
    "NCC is a platform where you can not only sharpen your problem solving ability but also showcase your programming skills.";
  const nthBasicInfo = 
    "NTH is an online hunt played worldwide. Follow the trails of clues and piece them together to get to the puzzle.";

  return (
    <div className="body-ContactUs events">
      <Container fluid>
        {/* <div className='heading-aboutUs display-3 mb-5 text-center'>Events</div> */}
        <Row>
          <Col lg={6} md={6} sm={12}>
            <Event
              info={nccBasicInfo}
              icon={Inquizitive}
              eventName="RC"
              id="1"
            />
          </Col>
          <Col>
            <Event
              info={nccBasicInfo}
              icon={NCC}
              eventName="NCC"
              id="2"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <Event
              info={nthBasicInfo}
              icon={NCC}
              eventName="NTH"
              id="3"
            />
          </Col>
          <Col>
            <Event
              info={nthBasicInfo}
              icon={Inquizitive}
              eventName="Inquizitive"
              id="4"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;
