import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h3 className={styles["about__text"]}>
        I combine full-stack development skills in JavaScript, React, Node.js,
        and Express with hands-on quality assurance experience. At Talkdesk, I
        helped ship CRM integrations for enterprise customers; now I bring that
        same attention to edge cases, performance, and user impact to every
        product I build.
      </h3>
      <div className={styles["about__cards"]}>
        <div className={styles["about__card"]}>
          <div className={styles["about__card-number"]}>2+</div>
          <div className={styles["about__card-text"]}>
            Years in software QA
          </div>
        </div>
        <div className={styles["about__card"]}>
          <div className={styles["about__card-number"]}>40+</div>
          <div className={styles["about__card-text"]}>Test plans authored</div>
        </div>
        <div className={styles["about__card"]}>
          <div className={styles["about__card-number"]}>30%</div>
          <div className={styles["about__card-text"]}>
            Fewer post-release defects
          </div>
        </div>
        <div className={styles["about__card"]}>
          <div className={styles["about__card-number"]}>40%</div>
          <div className={styles["about__card-text"]}>
            Faster bug resolution
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
