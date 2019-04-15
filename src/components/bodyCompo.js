import React, { Component } from "react";
import Projects from "./projects.js";
import "./style.css";

export default class BodyCompo extends Component {
  render() {
    return (
      <div className="body-container">
        <div className="body-content">
          <Projects />
        </div>
      </div>
    );
  }
}
