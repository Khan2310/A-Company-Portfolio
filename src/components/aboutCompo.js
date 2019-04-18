import React, { Component } from "react";
import AboutCard from "./aboutCard.js";
import Title from "./title.js";
import PersonEmpty from "./image/personEmpty.png";
import "./style.css";

export default class AboutCompo extends Component {
  render() {
    return (
      <div className="Projects-container">
        <Title projectHeadTitle="About" />
        <p>
          A company may create a portfolio to showcase the capabilities and
          strengths of the business's services. The portfolio is a collection of
          the products, services and achievements of the company. The goal of a
          company portfolio is to create a presence of the business on the
          market, attract more customers and to show how the business differs
          from its direct competitors on the market. The company portfolio is
          also used as a business strategy to show the growth of the company to
          attract potential investors and shareholders.
        </p>
        <div className="projects-card">
          <AboutCard
            profileImage={PersonEmpty}
            nameTitle="Person Name"
            positionTitle="Position"
            shortDesc="A person is a being that has certain capacities or attributes such as reason..."
          />
          <AboutCard
            profileImage={PersonEmpty}
            nameTitle="Person Name"
            positionTitle="Position"
            shortDesc="A person is a being that has certain capacities or attributes such as reason..."
          />
          <AboutCard
            profileImage={PersonEmpty}
            nameTitle="Person Name"
            positionTitle="Position"
            shortDesc="A person is a being that has certain capacities or attributes such as reason..."
          />
          <AboutCard
            profileImage={PersonEmpty}
            nameTitle="Person Name"
            positionTitle="Position"
            shortDesc="A person is a being that has certain capacities or attributes such as reason..."
          />
        </div>
      </div>
    );
  }
}
