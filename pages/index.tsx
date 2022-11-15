import React, { useEffect, useReducer } from "react";
import Layout from "./../components/Layout/Layout";
import Letter from "./../components/Letter/Letter";
import styles from "./index.module.scss";
import { IconArrowForwardUp } from "@tabler/icons";
import {
  LetterTrackerAction,
  LetterTrackerState,
  QuestionInterface,
} from "./../interfaces/LetterInterfaces";
import Image from "next/image";

const mockedQuestions: QuestionInterface[] = [
  { id: "1", title: "kot", text: "kot", image: "/cat.jpg" },
];

function reducer(
  state: LetterTrackerState,
  action: LetterTrackerAction
): LetterTrackerState {
  switch (action.type) {
    case "letterIsCorrect": {
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        correctLetter: true,
      };
    }
    case "letterIsIncorrect": {
      return {
        ...state,
        correctLetter: false,
      };
    }
    case "setLetters": {
      if (action.payload?.letters) {
        return {
          ...state,
          letters: action.payload?.letters,
        };
      }
      return { ...state };
    }
    default:
      return state;
  }
}

const initialState: LetterTrackerState = {
  currentIndex: 0,
  correctLetter: true,
  letters: [],
};

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  useEffect(() => {
    dispatch({
      type: "setLetters",
      payload: {
        letters: mockedQuestions[0].text.toUpperCase().split(""),
      },
    });
  }, []);

  const validateKey = (keyPressed: string, currentLetter: string): boolean => {
    if (keyPressed === currentLetter) {
      return true;
    }
    return false;
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    const keyMatchLetter = validateKey(
      e.key,
      state.letters[state.currentIndex].toLowerCase()
    );
    if (keyMatchLetter) {
      dispatch({ type: "letterIsCorrect" });
    } else {
      dispatch({ type: "letterIsIncorrect" });
    }
  };

  return (
    <>
      <div className={styles.image__container}>
        <Image
          width={400}
          height={600}
          style={{ objectFit: "cover" }}
          alt={mockedQuestions[0].title}
          src={mockedQuestions[0].image}
        />
      </div>

      <div className={styles.type__interface}>
        <div className={styles.letters__container}>
          {state.letters.map((letter: string, index: number) => (
            <Letter
              letter={letter}
              key={index}
              indexOfLetter={index}
              currentIndex={state.currentIndex}
              correctLetter={state.correctLetter}
            />
          ))}
        </div>
        <button className={styles.forward__button}>
          <IconArrowForwardUp />
        </button>
      </div>
    </>
  );
}

export default Home;
