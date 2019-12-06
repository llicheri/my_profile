// library imports
import React, { Component } from "react";

//////////internal imports
// styles
import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/icomoon.css";
import "./assets/css/style.css";
// components
import Aux from "./hoc/Auxiliary";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import MyResume from "./components/MyResume/MyResume";
import MyServices from "./components/MyServices/MyServices";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Posts from "./components/Posts/Posts";
import HireMe from "./components/HireMe/HireMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";

class App extends Component {
  state = {
    isSpinnerActive: true
  };
  componentDidMount() {
    // wait 500ms to order to the spinner to hide hisself
    setTimeout(() => this.setState({ isSpinnerActive: false }), 500);
  }
  render() {
    return (
      <Aux>
        <Spinner viewSpinner={this.state.isSpinnerActive} />
        <div id="page">
          <Header />

          <AboutMe />

          <MyResume />

          <MyServices />

          <Skills />

          <Work />

          <Posts />

          <HireMe />

          <Contact />
        </div>

        <Footer />
      </Aux>
    );
  }
}

export default App;
