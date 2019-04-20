import React, { Component } from "react";
//import "./style.css";

export default class ProjectCard extends Component {
  render() {
    return (
      <div className="Projects-card-container">
        <div className="project-title">{this.props.projectTitle}</div>
        <img src={this.props.projectImage} alt="ProjectOne" />
      </div>
    );
  }
}
