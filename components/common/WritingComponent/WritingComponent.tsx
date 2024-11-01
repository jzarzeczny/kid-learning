"use client";

import { ImageContainer } from "@components/WordsSection/ImageContainer/ImageContainer";
import { LettersContainer } from "@components/WordsSection/LettersContainer/LettersContainer";
import { WordsSection } from "@components/WordsSection/WordsSection";
import { typeLearningQuestions } from "@data/typeLearningData";
import {
  useLettersData,
  useLettersDataDispatch,
} from "@store/typeLearningStore";
import { useKeyHandlingHook } from "hooks/useKeyHandlingHook";
import { OpenKeyboardButton } from "../OpenKeyboard/OpenKeyboardButton";

const PATH = "/learnWriting";

export default function WritingComponent({
  category,
  questionId,
}: {
  category: string;
  questionId: number;
}) {
  const lettersData = useLettersData();
  const lettersDispatch = useLettersDataDispatch();

  useKeyHandlingHook({
    lettersDispatch: lettersDispatch,
    data: typeLearningQuestions[category],
    currentData: lettersData,
    category,
    questionId,
    path: PATH,
  });
  return (
    <WordsSection>
      <ImageContainer
        imageAlt={typeLearningQuestions[category][questionId].text}
        imageSrc={typeLearningQuestions[category][questionId].image}
      />
      <LettersContainer lettersData={lettersData} boxType="oneLine" />

      <OpenKeyboardButton />
    </WordsSection>
  );
}
