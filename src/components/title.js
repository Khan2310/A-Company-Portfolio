import React, { Component } from "react";
import "./style.css";

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <div className="head-title" id={this.props.titleID}>
          <h3>{this.props.projectHeadTitle}</h3>
        </div>
      </div>
    );
  }
}
