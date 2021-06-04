import React from "react";

const TeamMemberCard = (props) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="team-member">
        <img alt="Team Member" src={props.image} />
        <h2>
          Jay Samson <br />
          <i className="fab fa-linkedin-in"></i>
        </h2>
      </div>
    </div>
  );
};

export default TeamMemberCard;
