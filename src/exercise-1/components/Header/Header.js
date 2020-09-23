import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";

export const Header = withRouter(
  class extends Component {
    render() {
      const { links } = this.props;
      const { pathname: currentPath } = this.props.location;

      return (
        <header>
          {links.map(({ name, pathRegex, to }) => (
            <Link
              key={to}
              to={to}
              className={pathRegex.test(currentPath) ? "active" : ""}
            >
              {name}
            </Link>
          ))}
        </header>
      );
    }
  }
);
