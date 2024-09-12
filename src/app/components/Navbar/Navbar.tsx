"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDropdown();
      }
    };

    const handleOverlayClick = (event: MouseEvent) => {
      if (
        !(event.target as HTMLElement).closest(".navbar__icon") &&
        isDropdownOpen
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);
    document.addEventListener("mousedown", handleOverlayClick);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, [isDropdownOpen]);

  return (
    <nav className={styles.navbar}>
      {isDropdownOpen ? (
        <XIcon className={styles.navbar__icon} onClick={toggleDropdown} />
      ) : (
        <MenuIcon className={styles.navbar__icon} onClick={toggleDropdown} />
      )}
      <ul
        className={`${styles.navbar__tabs} ${
          isDropdownOpen ? styles.open : ""
        }`}
      >
        <li className={styles.navbar__tab}>Home</li>
        <li className={styles.navbar__tab}>About Me</li>
        <li className={styles.navbar__tab}>Projects</li>
        <li className={styles.navbar__tab}>Skills</li>
      </ul>
    </nav>
  );
};

export default Navbar;
