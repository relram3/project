import React, { Component } from "react";
import EyeSVG from "../imgs/if_119_Eye_183245.svg";
import PeopleSVG from "../imgs/baseline-supervisor_account-24px.svg";
import MissionSVG from "../imgs/baseline-assignment-24px.svg";
import "../styles/cases.css";

class Cases extends Component {
  render() {
    return (
      <div className="cases" id="Cases">
        <div className="cases-title">
          <h1>CASES WE HANDLE</h1>
          <div className="line-medium" />
        </div>
        <div className="cases-cards">
          <div className="card-1">
            <img src={EyeSVG} alt="logo" className="eye-svg" />
            <h3 className="card-1-header">OUR VISION</h3>
            <div className="line-medium" />
            <p className="card-1-paragraph">
              Founded in 2013, our firm has been providing effective, affordable
              and often untraditional legal solution to our hundreds of clients
              over the years. Our law firm work with remarkable team of expert
              attorneys in just about every field of law you can name, and it is
              because of this comprehensive nature of the legal services we
              provide, our firm has been able to stay ahead of its competitors.
            </p>
          </div>
          <div className="card-2">
            <img src={PeopleSVG} alt="logo" className="eye-svg" />
            <h3 className="card-1-header">WHO WE ARE</h3>
            <div className="line-medium" />
            <p className="card-1-paragraph">
              Founded in 2013, our firm has been providing effective, affordable
              and often untraditional legal solution to our hundreds of clients
              over the years. Our law firm work with remarkable team of expert
              attorneys in just about every field of law you can name, and it is
              because of this comprehensive nature of the legal services we
              provide, our firm has been able to stay ahead of its competitors.
            </p>
          </div>
          <div className="card-3">
            <img src={MissionSVG} alt="logo" className="eye-svg" />
            <h3 className="card-1-header">OUR MISSION</h3>
            <div className="line-medium" />
            <p className="card-1-paragraph">
              Founded in 2013, our firm has been providing effective, affordable
              and often untraditional legal solution to our hundreds of clients
              over the years. Our law firm work with remarkable team of expert
              attorneys in just about every field of law you can name, and it is
              because of this comprehensive nature of the legal services we
              provide, our firm has been able to stay ahead of its competitors.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cases;
