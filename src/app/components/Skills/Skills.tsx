import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles["skills__cards"]}>
        <div className={styles["skills__content"]}>
          <h1 className={styles["skills__title"]}>
            Need more info? <br />
            <span className={styles["skills__highlight"]}>I got you.</span>
          </h1>
          <p className={styles["skills__description"]}>
            Here are some of the services I offer. If you have any questions,
            feel free to reach out.
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
            Sharp eye for detail, finding those tricky edge cases that can slip
            through the cracks. Known for catching critical bugs, even on sites
            I'm not directly responsible for—whether it's your favorite website
            or streaming app.
          </p>
        </div>

        <div className={styles["skills__card"]}>
          <h3 className={styles["skills__card-title"]}>
            <span className={styles["skills__card-icon"]}>📝</span>{" "}
            Documentation & Process Improvement
          </h3>
          <p className={styles["skills__card-description"]}>
            Authored and maintained over 500 pages of clear, concise
            documentation, driving a 30% improvement in team efficiency.
            Streamlined workflows reduced average bug resolution time by 40%.
          </p>
        </div>

        <div className={styles["skills__card"]}>
          <h3 className={styles["skills__card-title"]}>
            <span className={styles["skills__card-icon"]}>🤝</span> Agile
            Methodologies & Team Collaboration
          </h3>
          <p className={styles["skills__card-description"]}>
            Enhanced workflows, facilitated communication in daily stand-ups,
            and fostered team collaboration to boost productivity. Ensured
            alignment with objectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
