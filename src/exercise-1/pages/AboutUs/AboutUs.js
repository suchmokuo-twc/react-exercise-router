import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

export class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <p>Company: ThoughtWorks Local</p>
        <p>Location: Xi'an</p>
        <br />
        <p>For more information, please</p>
        <p>
          view out <Link to="/">website</Link>.
        </p>
      </div>
    );
  }
}
