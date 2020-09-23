import React, { Component } from "react";
import "./MyProfile.css";

export class MyProfile extends Component {
  render() {
    return (
      <div className="my-profile">
        <p>Username: XXX</p>
        <p>Gender: Female</p>
        <p>Work: IT Industry</p>
        <p>Website '/my-profile'</p>
      </div>
    );
  }
}
