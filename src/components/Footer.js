import React, { Component } from "react";
import "../styles/footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="contact">
          <span id="verticalContact">CONTACT US</span>
          <span className="otherContacts"> </span>
          <span id="otherContacts1">773-999-9933</span>
          <span className="otherContacts">773-387-7901</span>
          <span className="otherContacts">tsegtslawgroup.com999@gmail.com</span>
          <span id="otherContacts2">3657 W. Lawrence Ave, IL 60625</span>
        </div>
        <div className="centerLogo">
          <div className="logoTag">
            <p id="copyright">
              &#169; 2019 TSEGTS Law Group P.C. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}
