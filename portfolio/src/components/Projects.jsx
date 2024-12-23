import React from 'react';
import '../styles/Projects.css';

const projects = [
  { name: 'Project 1', description: 'Description 1', link: '#' },
  { name: 'Project 2', description: 'Description 2', link: '#' },
  { name: 'Project 3', description: 'Description 3', link: '#' },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
