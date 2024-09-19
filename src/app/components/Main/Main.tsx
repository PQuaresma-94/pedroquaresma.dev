"use client";

import Spline from "@splinetool/react-spline/next";
import styles from "./Main.module.css";
import Link from "next/link";

const Main = () => {
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
    }
  };

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
            A full-stack developer with a sharp eye for quality, dedicated to
            building reliable and user-friendly web applications. When I'm not
            coding, you might find me hanging out with my cats or exploring the
            latest tech trends.
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
          <button
            className={`${styles["main__button"]} ${styles["main__button--learn-more"]}`}
            onClick={(event) => handleScroll("skills")}
          >
            Learn More
          </button>
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
