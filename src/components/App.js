import React, { Component } from "react";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

class App extends Component {
  render() {
    return (
      <div id="wrapper" className="container">
        <Navbar />
        <Wrapper />
      </div>
    );
  }
}

export default App;
