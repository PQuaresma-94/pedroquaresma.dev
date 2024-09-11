import React from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.logo}>
          <img
            src="/assets/icon-512x512.png"
            alt="Logo"
            className={styles["logo-image"]}
          />
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
