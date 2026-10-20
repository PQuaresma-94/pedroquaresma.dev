import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles["skills__cards"]}>
        <div className={styles["skills__content"]}>
          <h1 className={styles["skills__title"]}>
            How I build, <br />
            <span className={styles["skills__highlight"]}>test, and collaborate.</span>
          </h1>
          <p className={styles["skills__description"]}>
            I bring experience across product development, API integrations,
            testing, and documentation.
          </p>
        </div>
        <div className={styles["skills__card"]}>
          <h3 className={styles["skills__card-title"]}>
            <span className={styles["skills__card-icon"]}>💻</span> Frontend
            Development
          </h3>
          <p className={styles["skills__card-description"]}>
            Creating user-friendly, responsive interfaces with React and
            JavaScript frameworks, focusing on intuitive design and optimized
            performance for seamless user experiences.
          </p>
        </div>

        <div className={styles["skills__card"]}>
          <h3 className={styles["skills__card-title"]}>
            <span className={styles["skills__card-icon"]}>👁</span> Backend
            Development
          </h3>
          <p className={styles["skills__card-description"]}>
            Building scalable backend systems with Node.js and Express.js,
            optimizing server-side logic, RESTful APIs, and databases to support
            high-performance applications.
          </p>
        </div>

        <div className={styles["skills__card"]}>
          <h3 className={styles["skills__card-title"]}>
            <span className={styles["skills__card-icon"]}>🛡</span> Quality
            Assurance & Testing
          </h3>
          <p className={styles["skills__card-description"]}>
            Test planning, regression testing, API validation with Postman, and
            practical debugging with Chrome DevTools. ISTQB CTFL certified.
          </p>
        </div>

        <div className={styles["skills__card"]}>
          <h3 className={styles["skills__card-title"]}>
            <span className={styles["skills__card-icon"]}>📝</span>{" "}
            Documentation & Process Improvement
          </h3>
          <p className={styles["skills__card-description"]}>
            Authored 500+ pages of technical documentation to standardize
            testing workflows and support onboarding. Partnered with engineering
            teams to reduce average bug resolution time by 40%.
          </p>
        </div>

        <div className={styles["skills__card"]}>
          <h3 className={styles["skills__card-title"]}>
            <span className={styles["skills__card-icon"]}>🤝</span> Agile
            Methodologies & Team Collaboration
          </h3>
          <p className={styles["skills__card-description"]}>
            Experienced collaborating with cross-functional teams in Agile
            environments, translating observations into clear bug reports,
            actionable documentation, and better release outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
