import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-dark bg-primary">
          <Link to="/">Main</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </div>
    );
  }
}
