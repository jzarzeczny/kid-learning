import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";

function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <Image
          src="/landing.jpg"
          alt="Landing image"
          fill
          style={{ objectFit: "cover" }}
        />
      </section>
      <ul>
        <li>
          <Link href="/learnTyping">Learn typing</Link>
        </li>
        <li>
          <Link href="/learnReading">Learn reading</Link>
        </li>
        <li>
          <Link href="/learnWriting">Learn writing</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
