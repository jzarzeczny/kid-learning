import Link from "next/link";
import React from "react";
import styles from "./MenuItems.module.scss";

export const MenuItems = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/learnTyping">Nauka pisania liter</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/learnReading">Nauka czytania</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/learnWriting">Nauka pisania wyrazów</Link>
        </li>
        <li className={styles.listItem}>Place holder</li>
      </ul>
    </div>
  );
};
