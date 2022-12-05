import Link from "next/link";
import { Hamburger } from "./Hamburger/Hamburger";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <span>Logo</span>
      <Hamburger />
    </header>
  );
}
