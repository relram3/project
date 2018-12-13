import React, { Component } from "react";

import "./styles/App.css";
import "./styles/header.css";
import "./styles/blogEntries.css";
import "./styles/cases.css";
import "./styles/footer.css";
import "./styles/navbar.css";
import "./styles/profile.css";
import "./styles/testimonials.css";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "react-tabs/style/react-tabs.css";

import { Element } from "react-scroll";

import Header from "./common/Header";
import Profile from "./common/Profile";
import Testimonials from "./common/Testimonials";
import Footer from "./components/Footer";
import PracticeAreas from "./components/PracticeAreas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Element name="header">
          <Header />
        </Element>
        <Element name="practiceAreas">
          <PracticeAreas />
        </Element>
        <Element name="profile">
          <Profile />
        </Element>
        <Element name="testimonials">
          <Testimonials />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
