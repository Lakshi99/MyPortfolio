import React from 'react'
import HeroImage from '../../assets/about/Hero.jpg';
import styles from './Hero.module.css';


const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi! I'm <span className={styles.highlightName}>Lakshika</span></h1>
        <h2 className={styles.title1}>Full Stack Developer</h2>
        <p className={styles.description}>I’m a Full Stack Developer who loves building cool web apps and bringing ideas to life! With a blend of frontend and backend skills, I'm all about creating user-friendly, impactful digital experiences. Let's create something amazing together! </p>
        <a href = "mailto:lakshikabandara601@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    
    <img src={HeroImage} alt="Hero" className={styles.heroImg} />
    <div className={styles.topblur} />
    <div className={styles.bottomblur} />
   


  </section>
    
  
};

export default Hero
