import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Tech Solutions Inc.",
      dates: "May 2023 - Aug 2023",
      description:
        "Worked on developing and maintaining internal web applications using React and Node.js."
    },
    {
      title: "Volunteer Web Designer",
      company: "Community Center",
      dates: "Jan 2022 - Apr 2022",
      description:
        "Designed and built a responsive website to promote local events and resources."
    },
    {
      title: "Co-op Student",
      company: "Green Energy Corp.",
      dates: "Sep 2021 - Dec 2021",
      description:
        "Assisted in data analysis and visualization for renewable energy projects."
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-content">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h2>
              <strong>{exp.title}</strong> - {exp.company}
            </h2>
            <h2 className="dates">
              <em>{exp.dates}</em>
            </h2>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;