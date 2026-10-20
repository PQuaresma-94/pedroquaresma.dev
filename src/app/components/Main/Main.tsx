"use client";

import Spline from "@splinetool/react-spline/next";
import styles from "./Main.module.css";
import Link from "next/link";

const Main = () => {
  return (
    <main className={styles.main} id="main">
      <div className={styles["main__container"]}>
        <div className={styles["main__tech-tags"]}>
          <div className={styles["main__tech-tag"]}>React</div>
          <div className={styles["main__tech-tag"]}>JavaScript</div>
          <div className={styles["main__tech-tag"]}>Express.js</div>
          <div className={styles["main__tech-tag"]}>Agile</div>
          <div className={styles["main__tech-tag"]}>Quality Assurance</div>
        </div>
        <div className={styles["main__intro-text"]}>
          <h1 className={styles["main__intro-title"]}>Hello, I'm</h1>
          <h1 className={styles["main__intro-name"]}>Pedro Quaresma</h1>
          <p className={styles["main__intro-description"]}>
            A full-stack software engineer with QA experience in enterprise CRM
            integrations. I build reliable, user-centered web applications with
            React, Node.js, and a practical focus on quality.
          </p>
        </div>
        <div className={styles["main__buttons"]}>
          <Link href="mailto:pedromquaresma@gmail.com" passHref>
            <button
              className={`${styles["main__button"]} ${styles["main__button--get-in-touch"]}`}
            >
              Get in touch {">"}
            </button>
          </Link>
          <a
            className={`${styles["main__button"]} ${styles["main__button--learn-more"]}`}
            href="/Pedro_Quaresma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume
          </a>
        </div>
      </div>
      <Spline
        className={styles["main__image"]}
        scene="https://prod.spline.design/klnO14uaprnoRN4c/scene.splinecode"
      />
    </main>
  );
};

export default Main;
