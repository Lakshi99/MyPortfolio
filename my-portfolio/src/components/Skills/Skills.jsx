import React from 'react'
import styles from "./Skills.module.css";
import myskills from "../../data/myskills.json";

  import {getImageurl} from '../../utils';


const Skills = () => {
  return (
    <section className={styles.container} id='myskills'>
      <h2 className={styles.title}>My Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
        {myskills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageurl(skill.imageSrc)} alt={skill.title} /> 
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
         </div> 
      

    </section>
  );
};

export default Skills
