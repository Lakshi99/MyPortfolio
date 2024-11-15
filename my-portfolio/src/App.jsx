
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import Skills from "./components/Skills/Skills";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Journey from "./components/Journey/Journey";


function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
     <Skills /> 
    <Projects /> 
    <Journey />

    
    </div>
  )
}

export default App;
