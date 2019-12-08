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
import Header from "./containers/Header/Header";
import Profile from "./containers/Profile/Profile";
import Footer from "./containers/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";

class App extends Component {
  state = {
    isSpinnerActive: true,
    elementsToAnimate: []
  };
  componentDidMount() {
    // save all element to animate in state object
    this.setState({
      elementsToAnimate: document.getElementsByClassName("animate-box")
    });
    // wait 500ms to order to the spinner to hide hisself
    // and to calulate if some animation is required
    setTimeout(() => {
      this.setState({ isSpinnerActive: false });
      this.handleScroll();
    }, 500);
    // add listener on scroll
    window.addEventListener("scroll", this.handleScroll, true);
  }
  // delete listner
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  // on scroll activate animation for all elements with 'animated-fat' class
  handleScroll = () => {
    let delay = 0;
    let isDelay = false;
    for (let el of this.state.elementsToAnimate) {
      if (
        el.getBoundingClientRect().top <= window.innerHeight &&
        !el.classList.contains("animated-fast")
      ) {
        if (el.classList.contains("withDelay")) {
          delay++;
          isDelay = true;
        } else {
          isDelay = false;
        }
        setTimeout(
          () => {
            el.classList.add("fadeInUp", "animated-fast");
          },
          isDelay ? delay * 100 : 0
        );
      }
    }
  };
  render() {
    return (
      <Aux>
        <Header />
        <Profile />
        <Footer />
        <Spinner viewSpinner={this.state.isSpinnerActive} />
      </Aux>
    );
  }
}

export default App;
