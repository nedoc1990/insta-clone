import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import UserProfile from "./UserProfile";

class App extends Component {
  render() {
    return (
      <div id="wrapper" className="container">
        <Navbar />
        <Route
          path={this.props.match.url + ":username/"}
          children={props =>
            props.match ? <UserProfile {...props} /> : <Wrapper {...props} />
          }
        />
      </div>
    );
  }
}

export default App;
