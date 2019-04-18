import React, { Component } from "react";
import Projects from "./projects.js";
import AboutCompo from "./aboutCompo.js";
import "./style.css";

export default class BodyCompo extends Component {
  render() {
    return (
      <div className="body-container">
        <div className="body-content">
          <Projects />
          <AboutCompo />
        </div>
      </div>
    );
  }
}
