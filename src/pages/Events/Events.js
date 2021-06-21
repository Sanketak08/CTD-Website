import "./Events.css";
import Event from "./Event";
import Inquizitive from "./icons/inquizitive.png";
import NCC from "./icons/NCC.png";
import RC from "./icons/RC.png";
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
          <Col   className='mt-3 mb-5' lg={6} sm={12}>
            <Event
              info={nccBasicInfo}
              icon={RC}
              eventname="Reverse Coding"
              id="1"
            />
          </Col>
          <Col  className='mt-3 mb-5' lg={6} sm={12}>
            <Event
              info={nccBasicInfo}
              icon={NCC}
              eventname="National Coding Contest"
              id="2"
            />
          </Col>
        </Row>
        <Row>
          <Col  className='mt-3 mb-5' lg={6} sm={12}>
            <Event
              info={nthBasicInfo}
              icon={Inquizitive}
              eventname="Inquizitive"
              id="4"
            />
          </Col>
          <Col  className='mt-3 mb-5' lg={6} sm={12}>
            <Event
              info={nccBasicInfo}
              icon={RC}
              eventname="NTH"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;
