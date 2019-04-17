import React, { Component } from "react";
import ProjectCard from "./projectCard.js";
import Title from "./title.js";
import ProjectOneImage from "./image/project-1.jpeg";
import ProjectTwoImage from "./image/project-2.jpg";
import ProjectThreeImage from "./image/project-3.jpg";
import ProjectFourImage from "./image/project-4.jpg";
import "./style.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects-container">
        <Title />
        <div className="projects-card">
          <ProjectCard
            projectImage={ProjectOneImage}
            projectTitle="Project One Image"
          />
          <ProjectCard
            projectImage={ProjectTwoImage}
            projectTitle="Project two Image"
          />
          <ProjectCard
            projectImage={ProjectThreeImage}
            projectTitle="Project three Image"
          />
          <ProjectCard
            projectImage={ProjectFourImage}
            projectTitle="Project three Image"
          />
        </div>
        <div className="projects-card">
          <ProjectCard
            projectImage={ProjectOneImage}
            projectTitle="Project One Image"
          />
          <ProjectCard
            projectImage={ProjectTwoImage}
            projectTitle="Project two Image"
          />
          <ProjectCard
            projectImage={ProjectThreeImage}
            projectTitle="Project three Image"
          />
          <ProjectCard
            projectImage={ProjectFourImage}
            projectTitle="Project three Image"
          />
        </div>
      </div>
    );
  }
}
