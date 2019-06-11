import React, { Component } from "react";
//import "./style.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="titele-logo">
          <h3>
            <a href="#home">Company name</a>
          </h3>
        </div>
        <div className="nav-options">
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
