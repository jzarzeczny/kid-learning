"use client";

import React, { useEffect } from "react";
import styles from "./page.module.scss";
import Image from "next/image";

import Letter from "../../../components/Letter/Letter";
import { stockAnimalsQuestions } from "../../../data/typeLearningData";
import {
  useLetters,
  useLettersDispatch,
} from "../../../store/typeLearningStore";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { question: string } }) {
  const questionId = parseInt(params.question);
  const letters = useLetters();
  const lettersDispatch = useLettersDispatch();
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  useEffect(() => {
    lettersDispatch({
      type: "setLetters",
      payload: {
        letters: stockAnimalsQuestions[questionId].text.toUpperCase().split(""),
      },
    });
  }, [lettersDispatch]);

  const handleKeyPress = (e: KeyboardEvent) => {
    const keyMatchLetter = validateKey(
      e.key,
      letters.letters[letters.currentIndex].toLowerCase()
    );
    if (keyMatchLetter) {
      lettersDispatch({ type: "letterIsCorrect" });
      if (letters.currentIndex === letters.letters.length - 1) {
        console.log(stockAnimalsQuestions.length);
        if (questionId + 1 === stockAnimalsQuestions.length) {
          return router.push(`/learntyping`);
        }
        return router.push(`/learntyping/${questionId + 1}`);
      }
    } else {
      lettersDispatch({ type: "letterIsIncorrect" });
    }
  };
  const validateKey = (keyPressed: string, currentLetter: string): boolean => {
    if (keyPressed === currentLetter) {
      return true;
    }
    return false;
  };

  return (
    <section className={styles.main}>
      <div className={styles.image__container}>
        <Image
          width={400}
          height={600}
          style={{ objectFit: "cover" }}
          priority
          alt={stockAnimalsQuestions[questionId].title}
          src={stockAnimalsQuestions[questionId].image}
        />
      </div>

      <div className={styles.type__interface}>
        <div className={styles.letters__container}>
          {letters?.letters.map((letter: string, index: number) => (
            <Letter
              letter={letter}
              key={index}
              indexOfLetter={index}
              currentIndex={letters.currentIndex}
              correctLetter={letters.correctLetter}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
