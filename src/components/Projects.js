import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Personal Portfolio Website",
      description: "A responsive website to showcase my skills, projects, and experience.",
      tech: "React, CSS, React Router",
      link: "https://github.com/yourusername/portfolio"
    },
    {
      name: "Weather App",
      description: "An application that fetches real-time weather data using an external API.",
      tech: "JavaScript, OpenWeather API, Bootstrap",
      link: "https://github.com/yourusername/weather-app"
    },
    {
      name: "Task Manager",
      description: "A full-stack app for managing daily tasks with authentication.",
      tech: "Node.js, Express, MongoDB, React",
      link: "https://github.com/yourusername/task-manager"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2><strong>{project.name}</strong></h2>
            <p>{project.description}</p>
            <p className="tech"><em>{project.tech}</em></p>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;