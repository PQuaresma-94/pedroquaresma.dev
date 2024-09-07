import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <h3 className={styles["about__text"]}>
        I'm a full-stack developer proficient in JavaScript, React, Node.js, and
        Agile Methodologies. My journey from Quality Assurance to software
        development has equipped me with a unique skill set that blends
        meticulous attention to detail with a passion for creating impactful
        digital solutions.
      </h3>
      <div className={styles["about__cards"]}>
        <div className={styles["about__card"]}>
          <div className={styles["about__card-number"]}>3+</div>
          <div className={styles["about__card-text"]}>Years of experience</div>
        </div>
        <div className={styles["about__card"]}>
          <div className={styles["about__card-number"]}>8+</div>
          <div className={styles["about__card-text"]}>
            Technologies mastered
          </div>
        </div>
        <div className={styles["about__card"]}>
          <div className={styles["about__card-number"]}>5+</div>
          <div className={styles["about__card-text"]}>Projects completed</div>
        </div>
        <div className={styles["about__card"]}>
          <div className={styles["about__card-number"]}>500+</div>
          <div className={styles["about__card-text"]}>QA Bugs Squashed</div>
        </div>
      </div>
    </section>
  );
};

export default About;
