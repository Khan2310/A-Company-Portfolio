import React, { Component } from "react";
import "./style.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="titele-logo">
          <h3>Company name</h3>
        </div>
        <div className="nav-options">
          <ul>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}
