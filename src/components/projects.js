import React, { Component } from "react";
import ProjectCard from "./projectCard.js";
import Title from "./title.js";
import ProjectOneImage from "./image/project-1.jpeg";
import ProjectTwoImage from "./image/project-2.jpg";
import ProjectThreeImage from "./image/project-3.jpg";
import ProjectFourImage from "./image/project-4.jpg";
import ProjectFiveImage from "./image/project-5.jpg";
import ProjectSixImage from "./image/project-6.jpg";
import ProjectSevenImage from "./image/project-7.jpg";
import ProjectEightImage from "./image/project-8.jpg";
import "./style.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects-container">
        <Title />
        <div className="projects-card">
          <ProjectCard
            projectImage={ProjectOneImage}
            projectTitle="Project One"
          />
          <ProjectCard
            projectImage={ProjectTwoImage}
            projectTitle="Project two"
          />
          <ProjectCard
            projectImage={ProjectThreeImage}
            projectTitle="Project three"
          />
          <ProjectCard
            projectImage={ProjectFourImage}
            projectTitle="Project four"
          />
        </div>
        <div className="projects-card">
          <ProjectCard
            projectImage={ProjectFiveImage}
            projectTitle="Project five"
          />
          <ProjectCard
            projectImage={ProjectSixImage}
            projectTitle="Project six"
          />
          <ProjectCard
            projectImage={ProjectSevenImage}
            projectTitle="Project seven"
          />
          <ProjectCard
            projectImage={ProjectEightImage}
            projectTitle="Project eight"
          />
        </div>
      </div>
    );
  }
}
