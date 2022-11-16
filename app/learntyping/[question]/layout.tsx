export default function LayoutTyping() {
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
