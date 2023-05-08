import React from "react";
import styles from "./Hamburger.module.scss";

interface HamburgerInterface {
  openHanburger: boolean;
}

export const Hamburger = () => {
  return (
    <>
      <div className={styles.checkbox} />
      <div className={styles.hamburger}>
        <span className={`${styles.line} ${styles.line1}`}></span>
        <span className={`${styles.line} ${styles.line2}`}></span>
        <span className={`${styles.line} ${styles.line3}`}></span>
      </div>
    </>
  );
};
