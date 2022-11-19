import { QuestionInterface } from "./LetterInterfaces";

export interface CategoryInterface {
  categoryName: string;
  categoryImage: string;
  categoryQuestions: QuestionInterface[];
  href: string;
}
