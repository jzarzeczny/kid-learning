"use client";

import { typeLearningQuestions } from "@data/typeLearningData";
import {
  useLettersData,
  useLettersDataDispatch,
} from "@store/typeLearningStore";
import React from "react";
import { OpenKeyboardButton } from "@components/common/OpenKeyboard/OpenKeyboardButton";
import { WordsSection } from "@components/WordsSection/WordsSection";
import { ImageContainer } from "@components/WordsSection/ImageContainer/ImageContainer";
import { LettersContainer } from "@components/WordsSection/LettersContainer/LettersContainer";
import { useKeyHandlingHook } from "hooks/useKeyHandlingHook";
import { QuestionProps } from "@interfaces/QuestionPage";

const PATH = "learnWriting";

const LearnWritingQuestion: React.FC<QuestionProps> = ({ params }) => {
  const category = params.category;
  const questionId = parseInt(params.questionId);
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
};

export default LearnWritingQuestion;
