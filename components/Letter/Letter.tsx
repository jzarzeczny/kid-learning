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
  const isLetterOneLine = () => {
    return style === "oneLine" ? styles.oneLine : "";
  };
  const isItCurrentLetter = () => {
    return indexOfLetter === currentIndex ? styles.letterCurrent : "";
  };
  const wasInputIncorrect = () => {
    return !correctLetter && indexOfLetter === currentIndex
      ? styles.letterError
      : "";
  };
  const inputWasCorrect = () => {
    return indexOfLetter < currentIndex ? styles.letterCorrect : "";
  };

  return (
    <span
      className={`
      ${styles.letter}
      ${isLetterOneLine()}
      ${isItCurrentLetter()}
      ${wasInputIncorrect()} 
      ${inputWasCorrect()}`}
    >
      <span>
        {style === "oneLine" && currentIndex < indexOfLetter + 1 ? "" : letter}
      </span>
    </span>
  );
};

export default Letter;
