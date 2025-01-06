
import styles from "./App.module.css";
import ParticlesBackground from "./components/Particle/ParticlesBackground";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import Skills from "./components/Skills/Skills";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Journey from "./components/Journey/Journey";
import Gallary from "./components/Gallary/Gallary";
import Contact from "./components/Contact/Contact";



function App() {
  

  return (
    <div className={styles.App}>
      {/* Add the particle background as the first element */}
      <ParticlesBackground />
      <Navbar />
      <Hero />
     <Skills /> 
    <Projects /> 
    <Journey />
    <Gallary />
    <Contact />

    
    </div>
  )
}

export default App;
