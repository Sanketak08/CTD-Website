import TeamMemberCard from "./TeamMemberCard";
import Jay from "./Images/Jay.jpg";
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
          <Col lg={4} sm={12}>
            <TeamMemberCard image={Jay} />
          </Col>
          <Col lg={4} sm={12}>
            <TeamMemberCard image={Jay} />
          </Col>
          <Col lg={4} sm={12}>
            <TeamMemberCard image={Jay} />
          </Col>

        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <TeamMemberCard image={Jay} />
          </Col>
          <Col lg={6} sm={12}>
            <TeamMemberCard image={Jay} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WebTeam;
