import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
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
            <div className={styles["projects__card-content"]}>
              <img
                src="/assets/RelicHelperProject.png"
                alt="Relic Helper Project"
                className={styles["projects__card-image"]}
              />
              <h3 className={styles["projects__card-title"]}>
                Relic Helper App
              </h3>
              <p className={styles["projects__card-description"]}>
                Developed a web app for Star Wars Galaxy of Heroes players to
                manage and upgrade their game rosters.
              </p>
            </div>
            <div className={styles["projects__card-buttons"]}>
              <a
                href="https://github.com/PQuaresma-94/relic-helper-frontend"
                className={`${styles["projects__button"]}
                  ${styles["projects__button-frontend"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend
              </a>
              <a
                href="https://github.com/PQuaresma-94/relic-helper-backend"
                className={`${styles["projects__button"]}
                  ${styles["projects__button-backend"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend
              </a>
            </div>
          </div>
          <div className={styles["projects__card"]}>
            <div className={styles["projects__card-content"]}>
              <img
                src="/assets/WTWRProject.png"
                alt="WTWR Project"
                className={styles["projects__card-image"]}
              />
              <h3 className={styles["projects__card-title"]}>WTWR App</h3>
              <p className={styles["projects__card-description"]}>
                Built a weather-based clothing recommendation app using a
                weather API and a user-friendly interface.
              </p>
            </div>
            <div className={styles["projects__card-buttons"]}>
              <a
                href="https://github.com/PQuaresma-94/se_project_react"
                className={`${styles["projects__button"]}
                  ${styles["projects__button-frontend"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend
              </a>
              <a
                href="https://github.com/PQuaresma-94/se_project_express"
                className={`${styles["projects__button"]}
                  ${styles["projects__button-backend"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
