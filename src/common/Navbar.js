import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  HamburgerToggler,
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
              <Link
                to="header"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <NavbarBrand href="/" className="NavLink">
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
              <Collapse isOpen={this.state.collapse} navbar className="toggler">
                <NavbarNav right>
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
            </Navbar>
          </Router>
        </header>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;
