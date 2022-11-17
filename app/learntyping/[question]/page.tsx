"use client";

import React, { useEffect, useReducer } from "react";
import styles from "./page.module.scss";
import { IconChevronRight } from "@tabler/icons";
import Image from "next/image";
import {
  LetterTrackerAction,
  LetterTrackerState,
  QuestionInterface,
} from "../../../interfaces/LetterInterfaces";
import Letter from "../../../components/Letter/Letter";
import LayoutTyping from "./layout";

const mockedQuestions: QuestionInterface[] = [
  { id: "1", title: "kot", text: "kot", image: "/cat.jpg" },
  { id: "2", title: "pies", text: "pies", image: "/dog.jpg" },
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
    <LayoutTyping>
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
          <IconChevronRight />
        </button>
      </div>
    </LayoutTyping>
  );
}

export default Home;
