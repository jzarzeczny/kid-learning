import Header from "../../../components/Header/Header";
import styles from "./layout.module.scss";
export default function LayoutTyping({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={styles.main}>{children}</section>;
}
