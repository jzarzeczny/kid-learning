"use client";

import React from "react";
import styles from "./page.module.scss";
import { typeLearningQuestions } from "../../../../data/typeLearningData";
import { QuestionInterface } from "../../../../interfaces/LetterInterfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LearnReadingQuestionProps {
  params: {
    category: string;
    id: string;
  };
}

const LearnReadingQuestion: React.FC<LearnReadingQuestionProps> = ({
  params,
}) => {
  const router = useRouter();

  const { category, id } = params;
  const questionId = parseInt(id);

  const optionsToChooseFrom = getPhotos<QuestionInterface>(
    questionId,
    typeLearningQuestions[category]
  );

  const handlePictureSelection = (
    event: React.MouseEvent,
    answerTitle: string
  ) => {
    event.preventDefault();
    if (answerTitle === typeLearningQuestions[category][questionId].title) {
      if (questionId + 1 === typeLearningQuestions[category].length) {
        return router.push(`/learnreading`);
      }
      return router.push(`/learnreading/${category}/${questionId + 1}`);
    }
    event.currentTarget.classList.add(`${styles.incorrectImage}`);
  };

  return (
    <div className={styles.readingContainer}>
      <div className={styles.lettersContainer}>
        <h2 className={styles.letters}>
          {typeLearningQuestions[category][questionId].title}
        </h2>
      </div>
      <div className={styles.photosContainer}>
        {optionsToChooseFrom.map((option) => (
          <button
            key={option.title}
            className={styles.imageContainer}
            onClick={(event) => handlePictureSelection(event, option.title)}
          >
            <Image
              fill
              style={{ objectFit: "cover", objectPosition: "50% 20%" }}
              alt={option.title}
              src={option.image}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default LearnReadingQuestion;

function getPhotos<T>(indexOfQuestion: number, array: T[]) {
  let options: T[] = [array[indexOfQuestion]];
  while (options.length < 3) {
    let option = getRandomElement<T>(array);
    if (!options.includes(option)) {
      options.push(option);
    }
  }
  return shuffle<T>(options);
}

function getRandomElement<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffle<T>(array: T[]) {
  const newArray = [...array];

  for (let start = 0; start < newArray.length; start++) {
    const randomPosition = Math.floor(
      (newArray.length - start) * Math.random()
    );
    const randomItem = newArray.splice(randomPosition, 1);

    newArray.push(...randomItem);
  }

  return newArray;
}
