import React from "react";
import ProfileHeader from "../containers/ProfileHeader";
import Highlight from "../containers/Highlight";
import Gallery from "./Gallery";

const UserProfile = ({ match }) => {
  return (
    <div>
      <ProfileHeader {...match.params} />
      <Highlight {...match.params} />
      <Gallery {...match.params} />
    </div>
  );
};

export default UserProfile;
