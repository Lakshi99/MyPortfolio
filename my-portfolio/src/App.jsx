
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/About/About";


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
