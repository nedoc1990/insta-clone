import React from "react";

const UserInfo = () => {
  return (
    <div className="row">
      <div className="col-2">
        <a href="#/">
          <img
            className="rounded-circle history-profile-pic"
            src="images/3.jpg"
            alt="user-profile"
          />
        </a>
      </div>
      <div className="pl-4 col-10 d-flex flex-column justify-content-center">
        <div>
          <a href="#/" className="text-title text-dark">
            nedoc1990
          </a>
        </div>
        <div className="text-muted text-subtitle font-weight-light">
          Eduardo López Urquiaga
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
