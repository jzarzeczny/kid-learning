import React, { FC } from "react";
import styles from "./Letter.module.scss";
interface LetterProps {
  letter: string;
  indexOfLetter: number;
  currentIndex: number;
  correctLetter: boolean;
  style: "box" | "oneLine";
}

const Letter: FC<LetterProps> = ({
  letter,
  indexOfLetter,
  currentIndex,
  correctLetter,
  style,
}) => {
  return (
    <span
      className={`
      ${style === "oneLine" ? styles.oneLine : ""}
      ${styles.letter} ${
        indexOfLetter === currentIndex ? styles.letterCurrent : ""
      }
      
      ${
        !correctLetter && indexOfLetter === currentIndex
          ? styles.letterError
          : ""
      } 
      ${indexOfLetter < currentIndex ? styles.letterCorrect : ""}`}
    >
      <span>
        {style === "oneLine" && currentIndex < indexOfLetter + 1 ? "" : letter}
      </span>
    </span>
  );
};

export default Letter;
