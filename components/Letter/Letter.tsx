import React, { FC } from "react";
import styles from "./Letter.module.scss";
interface LetterProps {
  letter: string;
  indexOfLetter: number;
  currentIndex: number;
  correctLetter: boolean;
}

const Letter: FC<LetterProps> = ({
  letter,
  indexOfLetter,
  currentIndex,
  correctLetter,
}) => {
  return (
    <span
      className={`${styles.letter} ${
        indexOfLetter === currentIndex ? styles.letter__current : ""
      }
      
      ${
        !correctLetter && indexOfLetter === currentIndex
          ? styles.letter__error
          : ""
      } 
      ${indexOfLetter < currentIndex ? styles.letter__correct : ""}`}
    >
      {letter}
    </span>
  );
};

export default Letter;
