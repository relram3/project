import React, { Component } from "react";
import "../styles/practiceareas.css";
import gavel from "../images/baseline-gavel-24px.svg";

export default class PracticeAreas extends Component {
  render() {
    return (
      <div className="practiceareas">
        <div className="headerPane">
          <p className="headerTxt">PRACTICE AREAS</p>
          <p className="subTextpa">In Illinois</p>
        </div>
        <div className="areaPane">
          <ul className="areaList">
            <div className="areaItems">
              <img src={gavel} className="gavel" alt="gavel" />
              <span className="listItems">Immigration Law </span>
            </div>
            <div className="areaItems">
              <img src={gavel} className="gavel" alt="gavel" />
              <span className="listItems">Family Law </span>
            </div>
            <div className="areaItems">
              <img src={gavel} className="gavel" alt="gavel" />
              <span className="listItems">Criminal Defense </span>
            </div>
            <div className="areaItems">
              <img src={gavel} className="gavel" alt="gavel" />
              <span className="listItems">DUI/Traffic </span>
            </div>
            <div className="areaItems">
              <img src={gavel} className="gavel" alt="gavel" />
              <span className="listItems">Real Estate </span>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
