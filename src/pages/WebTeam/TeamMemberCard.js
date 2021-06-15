import React from "react";

const TeamMemberCard = (props) => {
  return (
    <div className="team-member">
        <img alt="Team Member" src={props.image} />
        <h2>
          Jay Samson <br />
          <i className="fab fa-linkedin-in"></i>
        </h2>
      </div>
  );
};

export default TeamMemberCard;
