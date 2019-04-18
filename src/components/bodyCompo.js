import React, { Component } from "react";
import Projects from "./projects.js";
import AboutCompo from "./aboutCompo.js";
import Coverphoto from "./coverphoto.js";
import Mapimage from "./image/map-image.jpg";
import "./style.css";

export default class BodyCompo extends Component {
  render() {
    return (
      <div className="body-container">
        <div className="body-content">
          <Projects />
          <AboutCompo />
          <Coverphoto
            coverimage={Mapimage}
            coverTitle=""
            photoClassName="map-image"
          />
        </div>
      </div>
    );
  }
}
