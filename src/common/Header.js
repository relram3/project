import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary heading-primary--main">
              Attorney
            </span>
            <span className="heading-primary heading-primary--sub">
              for Immigration Law
            </span>
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
