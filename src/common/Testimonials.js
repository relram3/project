import React, { Component } from "react";
import QuoteSVG from "../imgs/if_-42_3057671.svg";

class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials">
        <div className="testimonials-title">
          <h1 className="testimonials-title-text">PEOPLE WE'VE HELPED</h1>
          <div className="line-medium" />
        </div>
        <div className="testimonials-cards">
          <div className="card-1">
            <div className="quote">
              <div className="line-small" />
              <img src={QuoteSVG} alt="logo" className="eye-svg" />
              <div className="line-small" />
            </div>
            <p className="card-1-paragraph">
              Bayarjargal is a very professional and personable attorney. He
              helped me in forming and registering my business. I was very
              impressed with his research and evaluating the risk for every
              option. He was very open and honest on every cost prediction. I
              have recommended his services to my friends as well. I would
              definitely keep using his services.
            </p>
          </div>
          <div className="card-2">
            <div className="quote">
              <div className="line-small" />
              <img src={QuoteSVG} alt="logo" className="eye-svg" />
              <div className="line-small" />
            </div>
            <p className="card-1-paragraph">
              I was charged with one count of battery with bodily injury, a DUI,
              and 3 other traffic tickets. If convicted, I faced months of jail
              times plus thousands of fines and other fees. I decided to hire
              Mr. Sereenen and he did not disappoint me. In fact, after a bench
              trial, all my charges were dismissed! I had a great result with
              this attorney. The affordable legal fee was a huge plus!
            </p>
          </div>
          <div className="card-3">
            <div className="quote">
              <div className="line-small" />
              <img src={QuoteSVG} alt="logo" className="eye-svg" />
              <div className="line-small" />
            </div>
            <p className="card-1-paragraph">
              I hired Bayarjargal for a divorce case in 2015 and again for an
              immigration case in which my wife sponsored me for green card. He
              was honest and creative in handling my cases. His service was
              affordable and his client-communication was excellent!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
