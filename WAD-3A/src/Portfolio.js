import React from "react";
import { projects } from "./data";

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <img src={require(`./images/${project.image}`).default} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
