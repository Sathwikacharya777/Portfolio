// File: src/pages/Projects.jsx
import React from "react";
import "../styles/Projects.css";
import { useSelector } from "react-redux";

function Projects() {
  const projects = useSelector((state) => state.projects);

  return (
    <section className="projects-section">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
