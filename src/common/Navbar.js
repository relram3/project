import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

import { Link, Events, scrollSpy } from "react-scroll";

import "../styles/navbar.css";

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  };

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <Navbar
              color="white lighten-1"
              dark
              expand="md"
              fixed="top"
              scrolling
            >
              <Container>
                <Link
                  to="header"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <NavbarBrand className="NavLink">
                    <img
                      src="https://imgur.com/2ZNjwgw.png"
                      alt="Logo"
                      className="logo"
                    />
                  </NavbarBrand>
                </Link>
                {!this.state.isWideEnough && (
                  <NavbarToggler onClick={this.onClick} className="toggler" />
                )}
                <Collapse
                  isOpen={this.state.collapse}
                  navbar
                  className="toggler"
                >
                  <NavbarNav right>
                    <NavItem>
                      <NavLink to="#" className="navPhone">
                        <div className="callNow">
                          <strong className="callNowText">Call Us Now</strong>
                          <strong className="callNowNumber">
                            <svg
                              enableBackground="new 0 0 64 64"
                              height="64px"
                              version="1.1"
                              viewBox="0 0 64 64"
                              width="64px"
                              xmlns="http://www.w3.org/2000/svg"
                              className="phoneSVG"
                            >
                              <g id="Layer_1">
                                <g>
                                  <circle
                                    cx="32"
                                    cy="32"
                                    fill="#8c001acc"
                                    r="32"
                                  />
                                </g>
                                <g opacity="0.2">
                                  <g>
                                    <path
                                      d="M28.962,25.343c-0.417-4.794-5.418-7.146-5.63-7.242c-0.199-0.094-0.421-0.122-0.635-0.085     c-5.774,0.958-6.642,4.318-6.677,4.458c-0.048,0.196-0.039,0.399,0.022,0.589c6.886,21.366,21.198,25.327,25.903,26.63     c0.362,0.1,0.661,0.181,0.888,0.255C42.943,49.985,43.056,50,43.169,50c0.155,0,0.31-0.033,0.452-0.098     c0.144-0.065,3.544-1.667,4.375-6.891c0.037-0.227,0-0.463-0.105-0.668c-0.074-0.144-1.853-3.528-6.784-4.724     c-0.345-0.089-0.698,0.002-0.964,0.229c-1.556,1.329-3.705,2.745-4.632,2.891c-6.217-3.04-9.688-8.872-9.819-9.978     c-0.076-0.622,1.348-2.806,2.987-4.582C28.886,25.954,28.991,25.649,28.962,25.343z"
                                      fill="#231F20"
                                    />
                                  </g>
                                </g>
                                <g>
                                  <g>
                                    <path
                                      d="M28.962,23.343c-0.417-4.794-5.418-7.146-5.63-7.242c-0.199-0.094-0.421-0.122-0.635-0.085     c-5.774,0.958-6.642,4.318-6.677,4.458c-0.048,0.196-0.039,0.399,0.022,0.589c6.886,21.366,21.198,25.327,25.903,26.63     c0.362,0.1,0.661,0.181,0.888,0.255C42.943,47.985,43.056,48,43.169,48c0.155,0,0.31-0.033,0.452-0.098     c0.144-0.065,3.544-1.667,4.375-6.891c0.037-0.227,0-0.463-0.105-0.668c-0.074-0.144-1.853-3.528-6.784-4.724     c-0.345-0.089-0.698,0.002-0.964,0.229c-1.556,1.329-3.705,2.745-4.632,2.891c-6.217-3.04-9.688-8.872-9.819-9.978     c-0.076-0.622,1.348-2.806,2.987-4.582C28.886,23.954,28.991,23.649,28.962,23.343z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g id="Layer_2" />
                            </svg>
                            (773)-999-9933
                          </strong>
                        </div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <Link
                        to="practiceAreas"
                        spy={true}
                        smooth={true}
                        offset={-55}
                        duration={500}
                      >
                        <NavLink to="#" className="NavLink">
                          <strong className="navbtn">Practice Areas</strong>
                        </NavLink>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link
                        to="profile"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
                      >
                        <NavLink to="#" className="NavLink">
                          <strong className="navbtn">Profile</strong>
                        </NavLink>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link
                        to="testimonials"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
                      >
                        <NavLink to="#" className="NavLink">
                          <strong className="navbtn">Testimonials</strong>
                        </NavLink>
                      </Link>
                    </NavItem>
                    {/* <NavItem>
                      <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={-65}
                      duration={500}
                      >
                      <NavLink to="#" className="NavLink">
                      <strong>Services</strong>
                      </NavLink>
                      </Link>
                    </NavItem> */}
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
          </Router>
        </header>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;
