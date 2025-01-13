import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import { getImageurl } from '../../utils';
import { Link as ScrollLink } from "react-scroll";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Lakz</a>
      <div className={styles.menu}>  
      <img className={styles.menuBtn} src={menuOpen
      ? ("/src/assets/nav/closeIcon.png")
      : ("/src/assets/nav/menuIcon.png")
      }
       alt="menu icon" 
       onClick={() => setMenuOpen(!menuOpen)}
       />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}
        >
            <li>
            {/* <a href="/">Skills</a> */}
            <ScrollLink
             to="skills"
             smooth={true}
  duration={500}
  offset={-50} 
             >
              Skills
              </ScrollLink>
            </li>
            <li>
            <ScrollLink 
            to="projects"
            smooth={true}
  duration={500}
  offset={-50} 
            >
              Projects
              </ScrollLink>
            </li>
            <li>
            <ScrollLink 
            to="journey"
            smooth={true}
  duration={500}
  offset={-50} 
            >
              Journey
              </ScrollLink>
            </li>
            <li>
            <ScrollLink 
            to="gallery"
            smooth={true}
            duration={500}
            offset={-50} 
            >
              Gallery
              </ScrollLink>
            </li>
            <li>
            <ScrollLink 
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            >Contact Me
            </ScrollLink>  
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
