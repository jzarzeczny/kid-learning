"use client";

import { typeLearningQuestions } from "@data/typeLearningData";
import { useLetters, useLettersDispatch } from "@store/typeLearningStore";
import React, { useEffect } from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { OpenKeyboardButton } from "@components/common/OpenKeyboard/OpenKeyboardButton";

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
        <OpenKeyboardButton />
      </section>
    </div>
  );
};

export default LearnWritingQuestion;
