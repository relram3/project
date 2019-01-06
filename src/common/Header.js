import React, { Component } from "react";
import "../styles/header.css";

import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <header className="header parallax">
        <Navbar />
        <div className="header-gradient">
          <div className="header-intro">
            <h1 className="header-name">Bayarjargal Sereenen</h1>
            <div className="line" />
            <h3 className="header-tagline">Attorney at Law</h3>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
