import React from "react";
import styles from "./MenuItems.module.scss";

export const MenuItems = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Home</li>
        <li className={styles.listItem}>Nauka pisania liter</li>
        <li className={styles.listItem}>Nauka czytania</li>
        <li className={styles.listItem}>Nauka pisania wyrazów</li>
        <li className={styles.listItem}>Place holder</li>
      </ul>
    </div>
  );
};
