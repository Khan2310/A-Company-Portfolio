import React, { Component } from "react";
import "./coverphotoStyle.css";
import coverphoto from "./companyphoto.jpg";

export default class Coverphoto extends Component {
  render() {
    return (
      <div className="coverphoto-container">
        <img src={coverphoto} alt="companyphoto" />
        <div className="cover-image-title">
          <h1>Company Name</h1>
        </div>
      </div>
    );
  }
}
