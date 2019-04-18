import React, { Component } from "react";
import Navebar from "./components/navbar.js";
import Coverphoto from "./components/coverphoto.js";
import BodyCompo from "./components/bodyCompo.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navebar />
        </div>
        <div>
          <Coverphoto />
        </div>
        <div>
          <BodyCompo />
        </div>
      </div>
    );
  }
}

export default App;
