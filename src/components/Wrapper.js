import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Wrapper = () => {
  return (
    <div className="row">
      <Main />
      <Sidebar />
    </div>
  );
};

export default Wrapper;
