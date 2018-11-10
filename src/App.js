import React, { Component } from "react";

import "./styles/App.css";
import "./styles/header.css";
import "./styles/blogEntries.css";
import "./styles/cases.css";
import "./styles/footer.css";
import "./styles/navbar.css";
import "./styles/profile.css";
import "./styles/testimonials.css";

import Navbar from "./common/Navbar";
import Header from "./common/Header";
import BlogEntries from "./common/BlogEntries";
import Cases from "./common/Cases";
import Footer from "./common/Footer";
import Profile from "./common/Profile";
import Testimonials from "./common/Testimonials";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Cases />
        <Profile />
        <BlogEntries />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default App;
