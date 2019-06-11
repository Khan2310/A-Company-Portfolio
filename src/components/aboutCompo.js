import React, { Component } from "react";
import AboutCard from "./aboutCard.js";
import Title from "./title.js";
import PersonEmpty from "./image/personEmpty.png";
import Person1 from "./image/pro-manPhoto01.jpg";
import Person2 from "./image/pro-manPhoto02.jpg";
import Person3 from "./image/pro-manPhoto03.jpg";
import Person4 from "./image/pro-manPhoto04.jpg";
//import "./style.css";

export default class AboutCompo extends Component {
  render() {
    return (
      <div className="Projects-container" id="about">
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
            profileImage={Person1}
            nameTitle="Person Name"
            positionTitle="Position"
            shortDesc="A person is a being that has certain capacities or attributes such as reason..."
          />
          <AboutCard
            profileImage={Person2}
            nameTitle="Person Name"
            positionTitle="Position"
            shortDesc="A person is a being that has certain capacities or attributes such as reason..."
          />
          <AboutCard
            profileImage={Person3}
            nameTitle="Person Name"
            positionTitle="Position"
            shortDesc="A person is a being that has certain capacities or attributes such as reason..."
          />
          <AboutCard
            profileImage={Person4}
            nameTitle="Person Name"
            positionTitle="Position"
            shortDesc="A person is a being that has certain capacities or attributes such as reason..."
          />
        </div>
      </div>
    );
  }
}
