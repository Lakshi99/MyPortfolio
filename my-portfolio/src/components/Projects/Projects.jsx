import React from 'react';
import styles from './Projects.module.css';
import projectsData from '../../data/projects.json'; // Importing JSON data of projects

import internxImage from "../../assets/projects/InternX.png";
import exploreImage from "../../assets/projects/Explore.png";
import lectureImage from "../../assets/projects/Lecture.png";

const imageMap = {
  "InternX": internxImage,
   "Explore Express": exploreImage,
   "Lecture Hall Allocation System": lectureImage
};


const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {/* <img src={project.image} alt={project.title} className={styles.projectImage} /> */}
            <img src={imageMap[project.title]} alt={project.title} />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
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
    </section>
  );
};

export default Projects;
