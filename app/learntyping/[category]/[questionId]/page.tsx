"use client";

import React, { useEffect } from "react";
import styles from "./page.module.scss";
import Image from "next/image";

import Letter from "@components/Letter/Letter";
import { typeLearningQuestions } from "@data/typeLearningData";
import { useLetters, useLettersDispatch } from "@store/typeLearningStore";
import { useRouter } from "next/navigation";
import { OpenKeyboardButton } from "@components/common/OpenKeyboard/OpenKeyboardButton";

export default function Page({
  params,
}: {
  params: { questionId: string; category: string };
}) {
  const category = params.category;
  const questionId = parseInt(params.questionId);
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
        letters: typeLearningQuestions[category][questionId].text
          .toUpperCase()
          .split(""),
      },
    });
  }, []);

  const handleKeyPress = (e: KeyboardEvent) => {
    const keyMatchLetter = validateKey(
      e.key,
      letters.letters[letters.currentIndex].toLowerCase()
    );
    if (keyMatchLetter) {
      lettersDispatch({ type: "letterIsCorrect" });
      if (letters.currentIndex === letters.letters.length - 1) {
        if (questionId + 1 === typeLearningQuestions[category].length) {
          return router.push(`/learntyping`);
        }
        return router.push(`/learntyping/${category}/${questionId + 1}`);
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
          alt={typeLearningQuestions[category][questionId].title}
          src={typeLearningQuestions[category][questionId].image}
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
      <OpenKeyboardButton />
    </section>
  );
}
