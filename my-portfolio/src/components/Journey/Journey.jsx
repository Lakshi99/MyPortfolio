import React from "react";
import styles from './Journey.module.css';

const Journey = () => {
  const events = [
    { year: "2021", title: "Started Undergraduate Journey", description: "Began pursuing a degree in Software Engineering.", logo: "/path/to/university-logo.png" },
    { year: "2023", title: "Code with WIE Finalist", description: "Top 10 finalist among 100+ teams in the competition.", logo: "/path/to/code-wie-logo.png" },
    { year: "2024", title: "InternX Project", description: "Developed an internship web app as a mini-project.", logo: "/path/to/internx-logo.png" },
    { year: "2024", title: "Explore Express", description: "Worked as a Frontend Developer for a group project.", logo: "/path/to/explore-express-logo.png" },
    { year: "2024", title: "Library Management System", description: "Built a MERN stack project for managing libraries.", logo: "/path/to/library-logo.png" },
  ];

  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.timelineHeader}>My Journey</h2>
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.timelineContent}>
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
            <div className={styles.timelineDot}>
              <img src={event.logo} alt={`${event.title} logo`} className={styles.timelineLogo} />
            </div>
          </div>
        ))}
        <div className={styles.timelineLine}></div>
      </div>
    </div>
  );
};

export default Journey;

