import Header from "../components/Header/Header";
import "../styles/main.scss";
import Head from "./head";
import styles from "./layout.module.scss";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
