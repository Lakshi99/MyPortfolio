import React from 'react'
import HeroImage from '../../assets/about/Hero.jpeg';


const Hero = () => {
  return <section>
    <div>
        <h1>Hi! I'm Lakshika</h1>
        <h2>Full Stack Developer</h2>
        <p>I’m a Full Stack Developer and a Software Engineering undergraduate who loves building cool web apps and bringing ideas to life! With a blend of frontend and backend skills, I'm all about creating user-friendly, impactful digital experiences. Let's create something amazing together! </p>
        <a href = "mailto:lakshikabandara601@gmail.com">Contact Me</a>
    </div>
    
    <img src={HeroImage} alt="Hero" className="hero-image" />
    <div></div>

  </section>
    
  
};

export default Hero
