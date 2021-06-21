import TeamMemberCard from "./TeamMemberCard";
// import Jay from "./Images/Jay.jpg";
import Karan from './Images/karan.jpeg'
import Atharva from './Images/naphade.jpeg'
import Neil from './Images/neil.jpeg'
import Sanket from './Images/sanket.jpeg'
import Pranav from './Images/pranav.jpeg'
import "./WebTeam.css";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";

const WebTeam = () => {
  return (
    <div className="web-team">
      <Link to="/">
        <Button className="close-button" variant="light">
          X
        </Button>
      </Link>
      <br />
      <br />
      <Container fluid>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <TeamMemberCard linkedin='https://www.linkedin.com/in/atharva-naphade-540236148/'  name='Atharva Naphade' image={Atharva} />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <TeamMemberCard linkedin='https://www.linkedin.com/in/karan-lakhwani' name="Karan Lakhwani" image={Karan} />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <TeamMemberCard linkedin='https://www.linkedin.com/in/neil-deshpande-908aa118b/' name='Neil Deshpande' image={Neil} />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <TeamMemberCard linkedin='https://www.linkedin.com/in/atharva-naphade-540236148/'  name='Atharva Naphade' image={Atharva} />
          </Col>

        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <TeamMemberCard linkedin='https://www.linkedin.com/in/pranav-mohril/' name='Pranav Mohril' image={Pranav} />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <TeamMemberCard linkedin='https://www.linkedin.com/in/sanket-a-kulkarni/' name='Sanket Kulkarni' image={Sanket} />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <TeamMemberCard linkedin='https://www.linkedin.com/in/pranav-mohril/' name='Pranav Mohril' image={Pranav} />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <TeamMemberCard linkedin='https://www.linkedin.com/in/sanket-a-kulkarni/' name='Sanket Kulkarni' image={Sanket} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WebTeam;
