import React, { Component } from "react";
import Navebar from "./components/navbar.js";
import Coverphoto from "./components/coverphoto.js";
import BodyCompo from "./components/bodyCompo.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navebar />
        </div>
        <div>
          <Coverphoto />
        </div>
        <div>
          <BodyCompo />
        </div>
        <div className="about-info">
          <h2>About</h2>
          <p>
            A company may create a portfolio to showcase the capabilities and
            strengths of the business's services. The portfolio is a collection
            of the products, services and achievements of the company. The goal
            of a company portfolio is to create a presence of the business on
            the market, attract more customers and to show how the business
            differs from its direct competitors on the market. The company
            portfolio is also used as a business strategy to show the growth of
            the company to attract potential investors and shareholders.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
