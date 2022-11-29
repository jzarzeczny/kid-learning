"use client";

import React, { useEffect } from "react";
import { typeLearningQuestions } from "@data/typeLearningData";
import {
  useLettersData,
  useLettersDataDispatch,
} from "@store/typeLearningStore";
import { useRouter } from "next/navigation";
import { OpenKeyboardButton } from "@components/common/OpenKeyboard/OpenKeyboardButton";
import { WordsSection } from "@components/WordsSection/WordsSection";
import { ImageContainer } from "@components/WordsSection/ImageContainer/ImageContainer";
import { LettersContainer } from "@components/WordsSection/LettersContainer/LettersContainer";

export default function Page({
  params,
}: {
  params: { questionId: string; category: string };
}) {
  const category = params.category;
  const questionId = parseInt(params.questionId);
  const lettersData = useLettersData();
  const lettersDispatch = useLettersDataDispatch();
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
      lettersData.letters[lettersData.currentIndex].toLowerCase()
    );
    if (keyMatchLetter) {
      lettersDispatch({ type: "letterIsCorrect" });
      if (lettersData.currentIndex === lettersData.letters.length - 1) {
        if (questionId + 1 === typeLearningQuestions[category].length) {
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
    <WordsSection>
      <ImageContainer
        imageAlt={typeLearningQuestions[category][questionId].text}
        imageSrc={typeLearningQuestions[category][questionId].image}
      />
      <LettersContainer lettersData={lettersData} boxType="box" />

      <OpenKeyboardButton />
    </WordsSection>
  );
}
