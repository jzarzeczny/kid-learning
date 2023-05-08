import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { SectionHeader } from "@components/common/SectionHeader/SectionHeader";
import { games } from "@data/gamesData";

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
        <div className={styles.animation}>
          <h2 className={styles.first_line}>Nauka</h2>
          <h2 className={styles.second_line}>Zabawa</h2>
        </div>
        <Link href="#games" className={styles.cta}>
          ⬇
        </Link>
      </section>
      <section className={styles.gamesSection} id="games">
        <SectionHeader text="Gry" />

        <ul>
          {games.map((game) => (
            <li key={game.gameName}>
              <Link href={game.link}>{game.gameName}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
