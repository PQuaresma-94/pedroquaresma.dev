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

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (window.innerWidth < 768) {
        const topOffset = 60;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - topOffset,
          behavior: "smooth",
        });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
      closeDropdown();
    }
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
      const targetElement = event.target as HTMLElement;

      const navbarTabClass = styles.navbar__tab;
      const navbarTabsClass = styles.navbar__tabs;

      if (
        !targetElement.classList.contains(navbarTabClass) &&
        !targetElement.classList.contains(navbarTabsClass)
      ) {
        if (isDropdownOpen) {
          closeDropdown();
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);
    document.addEventListener("mousedown", handleOverlayClick);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
      document.removeEventListener("mousedown", handleOverlayClick);
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
        <li
          className={styles.navbar__tab}
          onClick={(event) => handleScroll("main")}
        >
          Home
        </li>
        <li
          className={styles.navbar__tab}
          onClick={(event) => handleScroll("about")}
        >
          About Me
        </li>
        <li
          className={styles.navbar__tab}
          onClick={(event) => handleScroll("projects")}
        >
          Projects
        </li>
        <li
          className={styles.navbar__tab}
          onClick={(event) => handleScroll("skills")}
        >
          Skills
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
