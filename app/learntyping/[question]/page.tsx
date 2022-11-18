"use client";

import React, { useEffect } from "react";
import styles from "./page.module.scss";
import { IconChevronRight } from "@tabler/icons";
import Image from "next/image";

import Letter from "../../../components/Letter/Letter";
import LayoutTyping from "./layout";
import { mockedQuestions } from "../../../data/typeLearningData";
import {
  useLetters,
  useLettersDispatch,
} from "../../../store/typeLearningStore";
import Link from "next/link";

export default function Page({ params }: { params: { question: string } }) {
  const questionId = parseInt(params.question);
  const letters = useLetters();
  const lettersDispatch = useLettersDispatch();

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
        letters: mockedQuestions[questionId].text.toUpperCase().split(""),
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
    <LayoutTyping>
      <div className={styles.image__container}>
        <Image
          width={400}
          height={600}
          style={{ objectFit: "cover" }}
          priority
          alt={mockedQuestions[questionId].title}
          src={mockedQuestions[questionId].image}
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
        <Link
          href={`/learntyping/${questionId + 1}`}
          className={styles.forward__button}
        >
          <IconChevronRight />
        </Link>
      </div>
    </LayoutTyping>
  );
}
