import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles["experience__container"]}>
        <div className={styles["experience__intro"]}>
          <p className={styles["experience__eyebrow"]}>
            Professional background
          </p>
          <h2 className={styles["experience__title"]}>
            Engineering with a quality-first foundation.
          </h2>
          <p className={styles["experience__description"]}>
            Before moving into full-stack development, I worked where product
            behavior meets real customer impact: enterprise CRM integrations,
            release quality, and cross-functional debugging.
          </p>
        </div>

        <div className={styles["experience__timeline"]}>
          <article className={styles["experience__entry"]}>
            <p className={styles["experience__period"]}>2021 — 2023</p>
            <div className={styles["experience__entry-content"]}>
              <h3>Quality Assurance Specialist</h3>
              <p className={styles["experience__company"]}>
                Talkdesk · Lisbon, Portugal
              </p>
              <p>
                Owned end-to-end QA for Salesforce, Microsoft Dynamics 365, and
                ServiceNow integrations. Partnered with five engineering teams
                to investigate failures, improve release confidence, and turn
                technical findings into clear documentation.
              </p>
              <div className={styles["experience__outcomes"]}>
                <span>30% fewer post-release defects</span>
                <span>40% faster bug resolution</span>
                <span>40+ test plans</span>
              </div>
            </div>
          </article>

          <article className={styles["experience__entry"]}>
            <p className={styles["experience__period"]}>2018 — 2020</p>
            <div className={styles["experience__entry-content"]}>
              <h3>Swim Coach</h3>
              <p className={styles["experience__company"]}>
                Sport Lisboa e Benfica · Lisbon, Portugal
              </p>
              <p>
                Designed data-informed training programs for 20+ competitive
                athletes and collaborated with senior staff across age groups.
                The work developed the feedback, communication, and iterative
                planning habits I bring to engineering teams.
              </p>
            </div>
          </article>
        </div>

        <div className={styles["experience__credentials"]}>
          <div>
            <p className={styles["experience__credential-label"]}>Education</p>
            <p>
              <strong>TripleTen</strong> · 500-hour Software Engineering
              Program
            </p>
          </div>
          <div>
            <p className={styles["experience__credential-label"]}>
              Certification
            </p>
            <p>
              <strong>ISTQB CTFL</strong> · Certified Tester, Foundation Level
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
