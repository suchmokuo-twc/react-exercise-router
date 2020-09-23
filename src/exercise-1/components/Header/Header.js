import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";

export const Header = withRouter(
  class extends Component {
    pages = [
      {
        path: "/",
        name: "Home",
      },
      {
        path: "/my-profile",
        name: "My Profile",
      },
      {
        path: "/about-us",
        name: "About Us",
      },
    ];

    render() {
      const { pages } = this;
      const { pathname: currentPath } = this.props.location;

      return (
        <header>
          {pages.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={currentPath === path ? "active" : ""}
            >
              {name}
            </Link>
          ))}
        </header>
      );
    }
  }
);
