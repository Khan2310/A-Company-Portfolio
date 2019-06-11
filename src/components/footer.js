import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-title">
          <h2>Company Name</h2>
        </div>
        <div className="footer-items">
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div className="footer-contacts" id="contact">
          <ul>
            <li>
              <h4>Contacts</h4>
            </li>
            <li>Phone: 123456789</li>
            <li>Address: xyz</li>
          </ul>
        </div>
      </div>
    );
  }
}

//{this.props.projectHeadTitle}
