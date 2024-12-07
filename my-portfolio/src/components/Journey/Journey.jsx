// import React from "react";
// import styles from './Journey.module.css';

// import sabLogo from "../../assets/journey/sab.png";
// import sjbLogo from "../../assets/journey/sjb.jpg";
// import aquinasLogo from "../../assets/journey/aquinas.jpg";

// const Journey = () => {
//   const events = [
//     { year: "2021", title: "BSc.Hons in Software Engineering", description: "Sabaragamuwa University of Sri Lanka", logo: sabLogo },
//     { year: "2020", title: "Certificate in English Language", description: "Aquinas College of Higher Studies", logo: aquinasLogo},
//     { year: "2019", title: "Advanced Level", description: "St.Joseph's Balika Maha Vidyalaya, Kegalle", logo: sjbLogo },
//     { year: "2015", title: "Ordinary Level", description: "St.Joseph's Balika Maha Vidyalaya, Kegalle", logo: sjbLogo },
  
//   ];

//   return (
//     <div className={styles.timelineContainer}>
//       <h2 className={styles.timelineHeader}>My Journey</h2>
//        <div className={styles.timeline}> 
//       {/* <div className={styles.timelineLine}></div>  */}
//         {events.map((event, index) => (
//           <div
//             key={index}
//             className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
//           >
//             <div className={styles.timelineDot}>
//               <img src={event.logo} alt={`${event.title} logo`} className={styles.timelineLogo} />
//             </div>
//             <div className={styles.timelineContent}>
//               <h3>{event.year}</h3>
//               <h4>{event.title}</h4>
//               <p>{event.description}</p>
//             </div>
            
//           </div>
//         ))}
//         {/* <div className={styles.timelineLine}></div> */}
//       </div>
//    </div>
//   );
// };

// export default Journey;






// import React from "react";
// import styles from './Journey.module.css';

// import sabLogo from "../../assets/journey/sab.png";
// import sjbLogo from "../../assets/journey/sjb.jpg";
// import aquinasLogo from "../../assets/journey/aquinas.jpg";

// Example volunteer logos
// import ieeeLogo from "../../assets/journey/ieee.png";
// import inslLogo from "../../assets/journey/insl.png";

// const Journey = () => {
//   const academicJourney = [
//     { year: "2021", title: "BSc.Hons in Software Engineering", description: "Sabaragamuwa University of Sri Lanka", logo: sabLogo },
//     { year: "2020", title: "Certificate in English Language", description: "Aquinas College of Higher Studies", logo: aquinasLogo },
//     { year: "2019", title: "Advanced Level", description: "St.Joseph's Balika Maha Vidyalaya, Kegalle", logo: sjbLogo },
//     { year: "2015", title: "Ordinary Level", description: "St.Joseph's Balika Maha Vidyalaya, Kegalle", logo: sjbLogo },
//   ];

//   const volunteeringJourney = [
//     { year: "2023", title: "Volunteer Manager", description: "IEEE Student Branch" },
//     { year: "2022", title: "Delegate Manager", description: "INSL Provincial Competition" },
    // Add more volunteering experiences as needed
  // ];

  // return (
  //   <div className={styles.container}>
  //     <h2 className={styles.header}>My Journey</h2>
  //     <div className={styles.content}>
        {/* Academic Journey */}
        // <div className={styles.leftColumn}>
        //   <h3 className={styles.subHeader}>Academic Journey</h3>
        //   <div className={styles.timeline}>
        //     {academicJourney.map((event, index) => (
        //       <div key={index} className={styles.timelineItem}>
        //         <div className={styles.timelineDot}>
        //           <img src={event.logo} alt={`${event.title} logo`} className={styles.timelineLogo} />
        //         </div>
        //         <div className={styles.timelineContent}>
        //           <h4>{event.year}</h4>
        //           <h5>{event.title}</h5>
        //           <p>{event.description}</p>
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        // </div>

        {/* Volunteering Journey */}
//         <div className={styles.rightColumn}>
//           <h3 className={styles.subHeader}>Volunteering Journey</h3>
//           <div className={styles.timeline}>
//             {volunteeringJourney.map((event, index) => (
//               <div key={index} className={styles.timelineItem}>
//                 <div className={styles.timelineDot}>
//                   <img src={event.logo} alt={`${event.title} logo`} className={styles.timelineLogo} />
//                 </div>
//                 <div className={styles.timelineContent}>
//                   <h4>{event.year}</h4>
//                   <h5>{event.title}</h5>
//                   <p>{event.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Journey;






import React, { useState } from "react";
import styles from "./Journey.module.css";

import sabLogo from "../../assets/journey/sab.png";
import sjbLogo from "../../assets/journey/sjb.jpg";
import aquinasLogo from "../../assets/journey/aquinas.jpg";

const Journey = () => {
  const [showAllVolunteering, setShowAllVolunteering] = useState(false);

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
        year: "2023",
        title: "Volunteer Manager",
        description: "IEEE Student Branch",
      },
      {
        year: "2022",
        title: "Delegate Manager",
        description: "INSL Provincial Competition",
      },
      {
        year: "2021",
        title: "Event Coordinator",
        description: "University Club",
      },
      {
        year: "2020",
        title: "Community Helper",
        description: "Local NGO",
      },
      {
        year: "2019",
        title: "Participant",
        description: "Clean City Campaign",
      },
    ],
  };

  const toggleShowAllVolunteering = () => {
   setShowAllVolunteering(!showAllVolunteering);
   };

  return (
    <div className={styles.journeyContainer}>
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
             <div className={styles.milestone} key={`academic-${index}`}>
             </div> 
              <div className={styles.content}>
              <h3>{milestone.year}</h3>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>

    
  
        {/* Volunteering Journey */}
        <div className={styles.journeySection}>
          <h2 className={styles.sectionTitle}>Volunteering Journey</h2>
          {milestones.volunteering
          .slice(0, showAllVolunteering ? milestones.volunteering.length : 3)
          .map((milestone, index) => (
           <div
           className={`${styles.milestone} ${
             index !== 
             (showAllVolunteering
              ? milestones.volunteering.length
              : 3) - 1
               ? styles.withLine
               : ""
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

{milestones.volunteering.length > 3 && (
            <button
              className={styles.seeMoreButton}
              onClick={toggleShowAllVolunteering}
            >
              {showAllVolunteering ? "See Less" : "See More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Journey;
