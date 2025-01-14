


import React from "react";
import styles from "./Journey.module.css";

import sabLogo from "../../assets/journey/sab.png";
import sjbLogo from "../../assets/journey/sjb.jpg";
import aquinasLogo from "../../assets/journey/aquinas.jpg";
import IEEELogo from "../../assets/journey/IEEE.jpg";
import pearlLogo from "../../assets/journey/pearl.png";
import ieeeSabLogo from "../../assets/journey/ieeesab.png";

const Journey = () => {
  

  const milestones = {
    academic: [
      {
        year: "2021",
        title: "BSc. Hons in Software Engineering",
        description: "Sabaragamuwa University of Sri Lanka",
        logo: sabLogo,
      },
      {
        year: "2020",
        title: "Certificate in English Language",
        description: "Aquinas College of Higher Studies",
        logo: aquinasLogo,
      },
      {
        year: "2019",
        title: "G.C.E Advanced Level",
        description: "St. Joseph's Balika Maha Vidyalaya, Kegalle",
        logo: sjbLogo,
      },
    ],
    volunteering: [
      {
        year: "2024",
        title: "Secretary Team Member",
        description: "Career Forge Phase 01",
        logo: IEEELogo,
      },
      {
        year: "2024",
        title: "Organizing Committee Member",
        description: "PeralHack 2.0",
        logo: pearlLogo,
      },
      {
        year: "2021",
        title: "Delegates Manager",
        description: "IEEE Innovation Sri Lanka Provincial Competition",
        logo: ieeeSabLogo,
      },
      
    ],
  };

  

  return (
    <section id="journey" className={styles.journeyContainer}>
     {/* <div className={styles.journeyContainer}> */}
      <h1 className={styles.journeyHeader}>My Journey</h1>
       <div className={styles.journeyTimeline}> 
        {/* Academic Journey */}
        <div className={styles.journeySection}>
          <h2 className={styles.sectionTitle}>Academic Journey</h2>
          {milestones.academic.map((milestone, index) => (
            <div
              className={`${styles.milestone} ${
                index !== milestones.academic.length - 1 ? styles.withLine : ""
              }`}
              key={`academic-${index}`}
            >
              <div className={styles.logoContainer}>
                <img
                  src={milestone.logo}
                  alt={`${milestone.title} logo`}
                  className={styles.logo}
                />
              </div>
             {/* <div className={styles.milestone} key={`academic-${index}`}> */}
             {/* </div>  */}
              <div className={styles.content}>
              <h3>{milestone.year}</h3>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>

    
  
        {/* Volunteering Journey */}
        <div className={styles.journeySection1}>
          <h2 className={styles.sectionTitle}>Volunteering Journey</h2>
          {milestones.volunteering.map((milestone, index) => (
           <div
           className={`${styles.milestone} ${
             index !== milestones.volunteering.length - 1 ? styles.withLin : ""
           }`}
           key={`volunteering-${index}`}
         >
           <div className={styles.logoContainer}>
             <img
               src={milestone.logo}
               alt={`${milestone.title} logo`}
               className={styles.logo}
             />
           </div>
              
              <div className={styles.content}>
              <h3>{milestone.year}</h3>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}


        </div>
      </div>
     </section>
  );
};

export default Journey;
