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
    isSpinnerActive: true
  };
  componentDidMount() {
    // wait 500ms to order to the spinner to hide hisself
    setTimeout(() => this.setState({ isSpinnerActive: false }), 500);
  }
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
