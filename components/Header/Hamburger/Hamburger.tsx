import React from "react";
import styles from "./Hamburger.module.scss";

export const Hamburger = () => {
  return (
    <>
      <input
        className={styles.checkbox}
        type="checkbox"
        name="hamburger"
        id="hamburger"
      />
      <div className={styles.hamburger}>
        <span className={`${styles.line} ${styles.line1}`}></span>
        <span className={`${styles.line} ${styles.line2}`}></span>
        <span className={`${styles.line} ${styles.line3}`}></span>
      </div>
    </>
  );
};
