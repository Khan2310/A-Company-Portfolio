import React, { Component } from "react";
import "./style.css";

export default class Coverphoto extends Component {
  render() {
    return (
      <div className="coverphoto-container">
        <img
          className={this.props.photoClassName}
          src={this.props.coverimage}
          alt="companyphoto"
        />
        <div className="cover-image-title">
          <h1>{this.props.coverTitle}</h1>
        </div>
      </div>
    );
  }
}
