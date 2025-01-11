import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import { getImageurl } from '../../utils';


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
            <Link to="/skills">Skills</Link>
            </li>
            <li>
            <Link to="/projects">Projects</Link>
            </li>
            <li>
            <Link to="/journey">Journey</Link>
            </li>
            <li>
            <Link to="/gallery">Gallery</Link>
            </li>
            <li>
            <Link to="/contact">Contact Me</Link>  
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
