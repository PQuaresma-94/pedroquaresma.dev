"use client";

import React, { useState, useEffect } from "react";
import styles from "./Preloader.module.css";

const Preloader: React.FC = () => {
  const [currentWord, setCurrentWord] = useState<string>("Hello");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const words = [
    "Hello",
    "Olá",
    "Hola",
    "Bonjour",
    "Ciao",
    "Hallo",
    "Konnichiwa",
    "Namaste",
    "Salam",
    "Hej",
  ];

  useEffect(() => {
    let wordIndex = 0;

    const intervalId = setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      setCurrentWord(words[wordIndex]);
    }, 300);

    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.preloader}>
      <div className={styles.preloaderText}>{currentWord}</div>
    </div>
  );
};

export default Preloader;
