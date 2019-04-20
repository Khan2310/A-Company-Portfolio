import React, { Component } from "react";
import Navebar from "./components/navbar.js";
import Coverphoto from "./components/coverphoto.js";
import BodyCompo from "./components/bodyCompo.js";
import Coverphotoimage from "./components/image/companyphoto.jpg";
import Footer from "./components/footer.js";
import "./components/style.css";

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
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
