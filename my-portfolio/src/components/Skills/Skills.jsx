import React from 'react'
import styles from "./Skills.module.css";
import myskills from "../../data/myskills.json";

import jsImage from "../../assets/skills/js.png";
import reactImage from "../../assets/skills/react.png";
import nodeImage from "../../assets/skills/node.png";
import expressImage from "../../assets/skills/Express.png";
import blenderImage from "../../assets/skills/Blender.png";
import bootstrapImage from "../../assets/skills/Bootstrap.png";
import cImage from "../../assets/skills/c.png";
import cssImage from "../../assets/skills/css.png";
import figmaImage from "../../assets/skills/figma.png";
import htmlImage from "../../assets/skills/html.png";
import mongodbImage from "../../assets/skills/mongodb.png";
import mysqlImage from "../../assets/skills/mysql.png";
import tailwindcssImage from "../../assets/skills/Tailwind CSS.png";
import trelloImage from "../../assets/skills/trello.png";
import netImage from "../../assets/skills/net.png";
import githubImage from "../../assets/skills/github.png";
import muiImage from "../../assets/skills/mui.png";


const imageMap = {
  "JavaScript": jsImage,
  "React": reactImage,
  "Node JS": nodeImage,
  "ExpressJS": expressImage,
  "Blender": blenderImage,
  "Bootstrap": bootstrapImage,
  "C": cImage,
  "CSS": cssImage,
  "Figma": figmaImage,
  "HTML": htmlImage,
  "MongoDB": mongodbImage,
  "MYSQL": mysqlImage,
  "Tailwind CSS": tailwindcssImage,
  "MUI": muiImage,
  "Trello": trelloImage,
  "Github": githubImage,
  ".Net": netImage
};


const Skills = () => {
  return (
    <section className={styles.container} id="myskills">
      <h2 className={styles.title}>My Skills</h2>
      {/* <div className={styles.content}> */}
      <div className={styles.skillsContainer}>
        <div className={styles.skills}>
          {myskills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                {/* Use imageMap to retrieve the correct image */}
                <img src={imageMap[skill.title]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;