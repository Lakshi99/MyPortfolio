import React from 'react';
import heroImage from '../../assets/about/hero.png';
import styles from './Hero.module.css';


const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi! I'm <span className={styles.highlightName}>Lakshika</span></h1>
        <h2 className={styles.title1}>I'm a Full Stack Developer</h2>
        <div className={styles.description}>
          {/* <p className={styles.description}>I’m a Full Stack Developer who loves building cool web apps and bringing ideas to life! With a blend of frontend and backend skills, I'm all about creating user-friendly, impactful digital experiences. Let's create something amazing together! </p>
         */}
          <p className={styles.description1}><p className={styles.description1}>
  Welcome Guys! Step into my world of creativity and code, where I transform ideas into delightful web experiences. Let’s make something magical together!
</p>
 </p>
        
        </div><a href = "mailto:lakshikabandara601@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    
    <img src={heroImage} alt="Hero" className={styles.heroImg} />
    <div className={styles.topblur} />
    <div className={styles.bottomblur} />
   


  </section>
    
  
};

export default Hero
