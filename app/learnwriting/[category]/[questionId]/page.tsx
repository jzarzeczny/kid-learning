"use client";

import { typeLearningQuestions } from "@data/typeLearningData";
import { useLetters, useLettersDispatch } from "@store/typeLearningStore";
import React, { useEffect } from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { OpenKeyboardButton } from "@components/common/OpenKeyboard/OpenKeyboardButton";
import Letter from "@components/Letter/Letter";

interface LearnWritingQuestionProps {
  params: {
    category: string;
    questionId: string;
  };
}

const LearnWritingQuestion: React.FC<LearnWritingQuestionProps> = ({
  params,
}) => {
  const { category, questionId } = params;
  const id = parseInt(questionId);
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
        letters: typeLearningQuestions[category][id].text
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
        if (id + 1 === typeLearningQuestions[category].length) {
          return router.push(`/learnTyping`);
        }
        return router.push(`/learnTyping/${category}/${questionId + 1}`);
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
    <div className={styles.container}>
      <section className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            fill
            style={{ objectFit: "cover" }}
            alt={typeLearningQuestions[category][id].title}
            src={typeLearningQuestions[category][id].image}
          />
        </div>
      </section>
      <section>
        <div className={styles.type__interface}>
          <div className={styles.letters__container}>
            {letters?.letters.map((letter: string, index: number) => (
              <Letter
                letter={letter}
                key={index}
                indexOfLetter={index}
                currentIndex={letters.currentIndex}
                correctLetter={letters.correctLetter}
                style="oneLine"
              />
            ))}
          </div>
        </div>

        <OpenKeyboardButton />
      </section>
    </div>
  );
};

export default LearnWritingQuestion;
