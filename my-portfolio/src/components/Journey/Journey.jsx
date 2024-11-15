import React from "react";

import styles from './Journey.module.css';

const Journey = () => {
  const events = [
    { year: "2021", title: "Started Undergraduate Journey", description: "Began pursuing a degree in Software Engineering." },
    { year: "2023", title: "Code with WIE Finalist", description: "Top 10 finalist among 100+ teams in the competition." },
    { year: "2024", title: "InternX Project", description: "Developed an internship web app as a mini-project." },
    { year: "2024", title: "Explore Express", description: "Worked as a Frontend Developer for a group project." },
    { year: "2024", title: "Library Management System", description: "Built a MERN stack project for managing libraries." },
  ];

  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.timelineHeade}>My Journey</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
