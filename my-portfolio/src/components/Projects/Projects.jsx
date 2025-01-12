
import React, { useState } from 'react';
import styles from './Projects.module.css';
import projectsData from '../../data/projects.json'; // Importing JSON data of projects

import internxImage from "../../assets/projects/InternX.png";
import exploreImage from "../../assets/projects/Explore.png";
import lectureImage from "../../assets/projects/Lecture.png";
import lmsImage from "../../assets/projects/lms.jpg";

import reactImage from "../../assets/skills/react.png";
import expressImage from "../../assets/skills/Express.png";
import mongodbImage from "../../assets/skills/mongodb.png";
import nodeImage from "../../assets/skills/node.png";
import figmaImage from "../../assets/skills/figma.png";
import trelloImage from "../../assets/skills/trello.png";
import htmlImage from "../../assets/skills/html.png";
import cssImage from "../../assets/skills/css.png";
import javascriptImage from "../../assets/skills/js.png";

const imageMap = {
  "InternX": internxImage,
  "Explore Express": exploreImage,
  "Lecture Hall Allocation System": lectureImage,
  "Library Management System": lmsImage
};

const techStackIcons = {
  "react": reactImage,
  "nodejs": nodeImage,
  "mongodb": mongodbImage,
  "expressjs": expressImage,
  "figma": figmaImage,
  "trello": trelloImage,
  "javascript": javascriptImage,
  "html": htmlImage,
  "css": cssImage
};

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Initial number of projects to display

  const showMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 3); // Show 3 more projects each time the button is clicked
  };

  const showLessProjects = () => {
    setVisibleProjects((prevCount) => Math.max(3, prevCount - 3)); // Hide 3 projects each time the button is clicked, with a minimum of 3
  };

  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectsContainer}>
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={imageMap[project.title]} alt={project.title} />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techStack}>
                {project.techStack?.length > 0 ? (
                  project.techStack.map((tech, idx) => (
                    <img
                      key={idx}
                      src={techStackIcons[tech.toLowerCase()] || fallbackIcon} // Ensure fallback for missing icons
                      alt={tech}
                      className={styles.techIcon}
                    />
                  ))
                ) : (
                  <p>No technologies listed</p>
                )}
              </div>
              <div className={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  GitHub
                </a>
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        {visibleProjects < projectsData.length && (
          <button onClick={showMoreProjects} className={styles.seeMoreButton}>
            Show More
          </button>
        )}
        {visibleProjects > 3 && (
          <button onClick={showLessProjects} className={styles.showLessButton}>
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
