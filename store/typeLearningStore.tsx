"use client";

import { createContext, useReducer, Dispatch, useContext } from "react";
import {
  LetterTrackerAction,
  LetterTrackerState,
} from "@interfaces/LetterInterfaces";
const initialState: LetterTrackerState = {
  currentIndex: 0,
  correctLetter: true,
  letters: [],
};
const TypeLearningLetterMechanismContext =
  createContext<LetterTrackerState>(initialState);

const TypeLearningLetterMechanismDispatchContext = createContext<
  Dispatch<LetterTrackerAction>
>(() => {});

export function TypeLearningLetterMechanismProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [letters, dispatch] = useReducer(reducer, initialState);

  return (
    <TypeLearningLetterMechanismContext.Provider value={letters}>
      <TypeLearningLetterMechanismDispatchContext.Provider value={dispatch}>
        {children}
      </TypeLearningLetterMechanismDispatchContext.Provider>
    </TypeLearningLetterMechanismContext.Provider>
  );
}

export function useLetters() {
  return useContext(TypeLearningLetterMechanismContext);
}
export function useLettersDispatch() {
  return useContext(TypeLearningLetterMechanismDispatchContext);
}

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
