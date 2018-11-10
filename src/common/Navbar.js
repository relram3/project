import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="#" className="nav-icon">
          Practice Areas & Services
        </a>
        <a href="#" className="nav-icon">
          Legal News
        </a>
        <img
          src="http://tsegtslawgroup.com/wp-content/uploads/2017/05/logo-small.jpg"
          alt="logo"
          id="logo"
        />
        <a href="#" className="nav-icon">
          Affiliations and Awards
        </a>
        <a href="#" className="nav-icon">
          Contact Us
        </a>
      </nav>
    );
  }
}

export default Navbar;
