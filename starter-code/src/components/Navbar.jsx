import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <NavLink exact activeClassName="navbar-brand" to="/">
            WikiCountries
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Navbar;
