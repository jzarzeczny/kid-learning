"use client";

import React from "react";
import { typeLearningQuestions } from "@data/typeLearningData";
import {
  useLettersData,
  useLettersDataDispatch,
} from "@store/typeLearningStore";
import { OpenKeyboardButton } from "@components/common/OpenKeyboard/OpenKeyboardButton";
import { WordsSection } from "@components/WordsSection/WordsSection";
import { ImageContainer } from "@components/WordsSection/ImageContainer/ImageContainer";
import { LettersContainer } from "@components/WordsSection/LettersContainer/LettersContainer";
import { QuestionProps } from "@interfaces/QuestionPage";
import { useKeyHandlingHook } from "hooks/useKeyHandlingHook";

const PATH = "learnTyping";

export async function generateStaticParams() {
  const parameters: { category: string; questionId: string }[] = [];
  for (const [categoryName, questions] of Object.entries(
    typeLearningQuestions
  )) {
    for (let i = 0; i < questions.length; i++) {
      const questionId = questions[i].id;
      parameters.push({ category: categoryName, questionId: questionId });
    }
  }

  return parameters;
}

const LearnTypingQuestion: React.FC<QuestionProps> = ({ params }) => {
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
      <LettersContainer lettersData={lettersData} boxType="box" />

      <OpenKeyboardButton />
    </WordsSection>
  );
};

export default LearnTypingQuestion;
