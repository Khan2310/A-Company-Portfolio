import React, { Component } from "react";
import "./style.css";

export default class AboutCard extends Component {
  render() {
    return (
      <div className="about-card-container">
        <img src={this.props.profileImage} alt="ProjectOne" />
        <div className="name-title">{this.props.nameTitle}</div>
        <div className="position-title">{this.props.positionTitle}</div>
        <div className="short-desc">{this.props.shortDesc}</div>
      </div>
    );
  }
}
