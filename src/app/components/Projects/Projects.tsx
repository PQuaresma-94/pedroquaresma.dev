import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles["projects__container"]}>
        <h1 className={styles["projects__title"]}>✨ Projects</h1>
        <h2 className={styles["projects__subtitle"]}>
          Streamlined digital experiences.
        </h2>
        <p className={styles["projects__description"]}>
          I've worked on a variety of projects, from QA tools to full-stack web
          applications. Here are some of my favorites:
        </p>
        <div className={styles["projects__cards"]}>
          <div className={styles["projects__card"]}>
            <h3 className={styles["projects__card-title"]}>Relic Helper App</h3>
            <p className={styles["projects__card-description"]}>
              Developed a web app for Star Wars Galaxy of Heroes players to
              manage and upgrade their game rosters.
            </p>
          </div>
          <div className={styles["projects__card"]}>
            <h3 className={styles["projects__card-title"]}>WTWR App</h3>
            <p className={styles["projects__card-description"]}>
              Built a weather-based clothing recommendation app using a weather
              API and a user-friendly interface.
            </p>
          </div>
        </div>
        <div className={styles["projects__pagination"]}>
          <span>1 / 2 projects</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
