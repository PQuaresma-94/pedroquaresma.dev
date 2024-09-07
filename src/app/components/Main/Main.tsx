import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <div>
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
          <button
            className={`${styles["main__button"]} ${styles["main__button--get-in-touch"]}`}
          >
            Get in touch {">"}
          </button>
          <button
            className={`${styles["main__button"]} ${styles["main__button--learn-more"]}`}
          >
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
