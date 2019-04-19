import React, { Component } from "react";
import Navebar from "./components/navbar.js";
import Coverphoto from "./components/coverphoto.js";
import BodyCompo from "./components/bodyCompo.js";
import Coverphotoimage from "./components/image/companyphoto.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navebar />
        </div>
        <div>
          <Coverphoto
            coverimage={Coverphotoimage}
            coverTitle="Company Name"
            photoClassName="cover-image"
            titleClassName="cover-image-title"
          />
        </div>
        <div>
          <BodyCompo />
        </div>
      </div>
    );
  }
}

export default App;
