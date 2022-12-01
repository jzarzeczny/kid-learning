import Letter from "@components/Letter/Letter";
import { LetterTrackerState } from "@interfaces/LetterInterfaces";
import React from "react";
import styles from "./LetterContainer.module.scss";
interface LettersContainerProps {
  lettersData: LetterTrackerState;
  boxType: "box" | "oneLine";
}

export const LettersContainer: React.FC<LettersContainerProps> = ({
  lettersData,
  boxType,
}) => {
  return (
    <div className={styles.lettersContainer}>
      <div className={styles.lettersRow}>
        {lettersData?.letters.map((letter: string, index: number) => (
          <Letter
            letter={letter}
            key={index}
            indexOfLetter={index}
            currentIndex={lettersData.currentIndex}
            correctLetter={lettersData.correctLetter}
            style={boxType}
          />
        ))}
      </div>
    </div>
  );
};
