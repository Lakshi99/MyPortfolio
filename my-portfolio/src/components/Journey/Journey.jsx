import React from "react";
import styles from './Journey.module.css';

import sabLogo from "../../assets/journey/sab.png";
import sjbLogo from "../../assets/journey/sjb.jpg";
import aquinasLogo from "../../assets/journey/aquinas.jpg";

const Journey = () => {
  const events = [
    { year: "2021", title: "BSc.Hons in Software Engineering", description: "Sabaragamuwa University of Sri Lanka", logo: sabLogo },
    { year: "2020", title: "Certificate in English Language", description: "Aquinas College of Higher Studies", logo: aquinasLogo},
    { year: "2019", title: "Advanced Level", description: "St.Joseph's Balika Maha Vidyalaya, Kegalle", logo: sjbLogo },
    { year: "2015", title: "Ordinary Level", description: "St.Joseph's Balika Maha Vidyalaya, Kegalle", logo: sjbLogo },
  
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

