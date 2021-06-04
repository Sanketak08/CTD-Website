import TeamMemberCard from "./TeamMemberCard";
import Jay from "./Images/Jay.jpg";
import "./WebTeam.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const WebTeam = () => {
  return (
    <div className="web-team">
      <Link to="/" >
        <Button className='close-button' variant='light'>X</Button>
      </Link>
      <br/><br/>
      <div className="container-fluid">
        <div className="row">
          <TeamMemberCard image={Jay} />
          <TeamMemberCard image={Jay} />
          <TeamMemberCard image={Jay} />
          <TeamMemberCard image={Jay} />
        </div>
        <div className="row">
          <TeamMemberCard image={Jay} />
          <TeamMemberCard image={Jay} />
          <TeamMemberCard image={Jay} />
          <TeamMemberCard image={Jay} />
        </div>
      </div>
    </div>
  );
};

export default WebTeam;
