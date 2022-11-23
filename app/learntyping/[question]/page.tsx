"use client";

import React, { useEffect, useRef } from "react";
import styles from "./page.module.scss";
import Image from "next/image";

import Letter from "../../../components/Letter/Letter";
import { stockAnimals } from "../../../data/typeLearningData";
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
  const inputRef = useRef<HTMLInputElement>(null);

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
        letters: stockAnimals[questionId].text.toUpperCase().split(""),
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
        console.log(stockAnimals.length);
        if (questionId + 1 === stockAnimals.length) {
          return router.push(`/learntyping`);
        }
        return router.push(`/learntyping/${questionId + 1}`);
      }
    } else {
      lettersDispatch({ type: "letterIsIncorrect" });
    }
  };

  const validateKey = (keyPressed: string, currentLetter: string): boolean => {
    if (keyPressed.toLowerCase() === currentLetter) {
      return true;
    }
    return false;
  };

  return (
    <section className={styles.main}>
      <div className={styles.image__container}>
        <Image
          fill
          style={{ objectFit: "cover" }}
          priority
          alt={stockAnimals[questionId].title}
          src={stockAnimals[questionId].image}
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
      <div className={styles.mobileKeyboardHandler}>
        <button
          className={styles.openKeyboard}
          onClick={() => inputRef.current?.focus({ preventScroll: true })}
        >
          ⌨
        </button>
        <input
          ref={inputRef}
          autoFocus
          type="text"
          className={styles.mobileInput}
          id="showKeyboardOnMobile"
        />
      </div>
    </section>
  );
}
