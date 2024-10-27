import React, {useState} from 'react'
import styles from "./Navbar.module.css";
import { getImageurl } from '../../utils';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
            <li>
            <a href="/">About Me</a>
            </li>
            <li>
            <a href="/">Skills</a>
            </li>
            <li>
            <a href="/">My Journey</a>
            </li>
            <li>
            <a href="/">Gallary</a>
            </li>
            <li>
            <a href="/">Contact Me</a> 
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
