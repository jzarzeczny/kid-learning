import Header from "../../../components/Header/Header";
import styles from "./layout.module.scss";
export default function LayoutTyping({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
