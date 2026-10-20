"use client";

import styles from "./Footer.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MailIcon } from "lucide-react";

const Footer = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles["footer__container"]}>
        <span className={styles["footer__info"]}>
          <p className={styles["footer__text"]}>
            Crafted with ✨ by{" "}
            <Link
              href="https://github.com/PQuaresma-94"
              target="_blank"
              passHref
              className={styles["footer__name"]}
            >
              pedroq
            </Link>
          </p>
          <hr className={styles["footer__divider"]} />
          <span className={styles["footer__time-wrapper"]}>
            <p className={styles["footer__time-label"]}>Local time:</p>
            <p className={styles["footer__time"]}>{time} Pacific Time</p>
          </span>
        </span>
        <Link
          href="mailto:pedromcbquaresma.work@gmail.com"
          passHref
          className={styles["footer__email-link"]}
        >
          <button className={styles["footer__button"]}>
            <MailIcon className={styles["footer__icon"]} />
            <span className={styles["footer__email"]}>
              pedromcbquaresma.work@gmail.com
            </span>
          </button>
        </Link>
      </div>
      <div className={styles["footer__gradient"]} />
    </footer>
  );
};

export default Footer;
