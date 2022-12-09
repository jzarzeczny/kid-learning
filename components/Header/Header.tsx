import { Hamburger } from "./Hamburger/Hamburger";
import styles from "./Header.module.scss";
import { MenuItems } from "./MenuItems/MenuItems";

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Logo</span>
      <Hamburger />
      <MenuItems />
    </header>
  );
}
