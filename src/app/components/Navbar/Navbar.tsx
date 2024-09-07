import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__tabs}>
        <li className={styles.navbar__tab}>Home</li>
        <li className={styles.navbar__tab}>About Me</li>
        <li className={styles.navbar__tab}>Projects</li>
        <li className={styles.navbar__tab}>Skills</li>
      </ul>
    </nav>
  );
};

export default Navbar;
