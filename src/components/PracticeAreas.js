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
              <p className="practiceAreaDesc">
                <svg
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bulletPoint"
                >
                  <path d="M7 4 L12 9 7 14 6 13 10 9 6 5 Z" />
                </svg>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                molestiae aliquam placeat molestias. Libero, quibusdam error.
              </p>
            </div>
            <div className="areaItems">
              <img src={gavel} className="gavel" alt="gavel" />
              <span className="listItems">Family Law </span>
              <p className="practiceAreaDesc">
                <svg
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bulletPoint"
                >
                  <path d="M7 4 L12 9 7 14 6 13 10 9 6 5 Z" />
                </svg>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                molestiae aliquam placeat molestias. Libero, quibusdam error.
              </p>
            </div>
            <div className="areaItems">
              <img src={gavel} className="gavel" alt="gavel" />
              <span className="listItems">Criminal Defense </span>
              <p className="practiceAreaDesc">
                <svg
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bulletPoint"
                >
                  <path d="M7 4 L12 9 7 14 6 13 10 9 6 5 Z" />
                </svg>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                molestiae aliquam placeat molestias. Libero, quibusdam error.
              </p>
            </div>
            <div className="areaItems">
              <img src={gavel} className="gavel" alt="gavel" />
              <span className="listItems">DUI/Traffic </span>
              <p className="practiceAreaDesc">
                <svg
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bulletPoint"
                >
                  <path d="M7 4 L12 9 7 14 6 13 10 9 6 5 Z" />
                </svg>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                molestiae aliquam placeat molestias. Libero, quibusdam error.
              </p>
            </div>
            <div className="areaItems">
              <img src={gavel} className="gavel" alt="gavel" />
              <span className="listItems">Real Estate </span>
              <p className="practiceAreaDesc">
                <svg
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bulletPoint"
                >
                  <path d="M7 4 L12 9 7 14 6 13 10 9 6 5 Z" />
                </svg>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                molestiae aliquam placeat molestias. Libero, quibusdam error.
              </p>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
