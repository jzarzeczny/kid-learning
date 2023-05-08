import { QuestionInterface } from "./LetterInterfaces";

export interface CategoryInterface {
  categoryName: string;
  categoryImage: string;
  categoryId: string;
  group: string;
}

export interface GroupCategoryInterface {
  [key: string]: CategoryInterface[];
}
