
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
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <Router>
    <div className={styles.App}>
    <ParticlesBackground />
      {/* Add the particle background as the first element */}
      <Navbar />
      <div className="scrollContainer">
      <Routes>
      <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
       
     </Routes>
     <Skills /> 
    <Projects /> 
    <Journey />
    <Gallary />
    <Contact /> 
    <Footer />   

 </div>
 
    
    </div>
    </Router>
  )
}

export default App;
