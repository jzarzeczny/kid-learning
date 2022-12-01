import { Dispatch, useEffect } from "react";

import {
  LetterTrackerAction,
  LetterTrackerState,
  QuestionInterface,
} from "@interfaces/LetterInterfaces";
import { useRouter } from "next/navigation";

interface UseKeyHandlingHookInterface {
  lettersDispatch: Dispatch<LetterTrackerAction>;
  data: QuestionInterface[];
  currentData: LetterTrackerState;
  category: string;
  questionId: number;
  path: string;
}

export function useKeyHandlingHook({
  lettersDispatch,
  data,
  currentData,
  category,
  questionId,
  path,
}: UseKeyHandlingHookInterface) {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  useEffect(() => {
    lettersDispatch({
      type: "setLetters",
      payload: {
        letters: data[questionId].text.toUpperCase().split(""),
      },
    });
  }, []);

  const handleKeyPress = (e: KeyboardEvent) => {
    const keyMatchLetter = validateKey(
      e.key,
      currentData.letters[currentData.currentIndex].toLowerCase()
    );
    if (keyMatchLetter) {
      lettersDispatch({ type: "letterIsCorrect" });
      if (currentData.currentIndex === currentData.letters.length - 1) {
        if (questionId + 1 === data.length) {
          return router.push(`${path}`);
        }
        return router.push(`${path}/${category}/${questionId + 1}`);
      }
    } else {
      lettersDispatch({ type: "letterIsIncorrect" });
    }
  };
}

const validateKey = (keyPressed: string, currentLetter: string): boolean => {
  if (keyPressed.toLowerCase() === currentLetter) {
    return true;
  }
  return false;
};
