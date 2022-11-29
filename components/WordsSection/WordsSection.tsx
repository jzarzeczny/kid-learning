import React from "react";
import styles from "./WordsSection.module.scss";

interface WordsSection {
  children: React.ReactNode;
}

export const WordsSection: React.FC<WordsSection> = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};
