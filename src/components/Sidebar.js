import React from "react";
import UserInfo from "./UserInfo";
import History from "../containers/History";

const Sidebar = () => {
  return (
    <div className="col-4">
      <UserInfo />
      <History />
    </div>
  );
};

export default Sidebar;
