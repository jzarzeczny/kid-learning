export interface QuestionInterface {
  id: string;
  title: string;
  text: string;
  image: string;
}

export interface LetterTrackerState {
  currentIndex: number;
  correctLetter: boolean;
  letters: string[];
}

export interface LetterPayload {
  currentIndex?: number;
  correctLetter?: boolean;
  letters?: string[];
}

export interface LetterTrackerAction {
  type: string;
  payload?: LetterPayload;
}
