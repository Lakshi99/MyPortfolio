
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import Skills from "./components/Skills/Skills";
import Skills from "./components/Skills/Skills";


function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
     <Skills /> 

    
    </div>
  )
}

export default App;
