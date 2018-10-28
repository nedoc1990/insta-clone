import React from "react";
import ProfileHeader from "../containers/ProfileHeader";
import Highlight from "./Highlight";

const UserProfile = ({ match }) => {
  return (
    <div>
      <ProfileHeader {...match.params} />
      <Highlight {...match.params} />
    </div>
  );
};

export default UserProfile;
