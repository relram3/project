import React, { Component } from "react";
import "../styles/awards.css";

class Awards extends Component {
  render() {
    return (
      <div className="award-row">
        <img
          src="https://i.imgur.com/uETcIYX.png"
          alt=""
          className="award-image"
        />
        <img
          src="https://imgur.com/MgVJowV.png"
          alt=""
          className="award-image"
        />
        <img
          src="https://imgur.com/XrgDDi1.png"
          alt=""
          className="award-image"
        />
        <img
          src="https://imgur.com/CCcoiFG.png"
          alt=""
          className="award-image"
        />
      </div>
    );
  }
}

export default Awards;
