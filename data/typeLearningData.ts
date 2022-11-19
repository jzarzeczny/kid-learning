import { CategoryInterface } from "../interfaces/CategoryInterface";
import { QuestionInterface } from "../interfaces/LetterInterfaces";

export const stockAnimalsQuestions: QuestionInterface[] = [
  { id: "1", title: "kot", text: "kot", image: "/cat.jpg" },
  { id: "2", title: "pies", text: "pies", image: "/dog.jpg" },
  { id: "3", title: "krowa", text: "krowa", image: "/cow.jpg" },
  { id: "4", title: "owca", text: "owca", image: "/sheep.jpg" },
  { id: "5", title: "kura", text: "kura", image: "/chicken.jpg" },
  { id: "6", title: "indyk", text: "indyk", image: "/turkey.jpg" },
];

export const letterLearningData: CategoryInterface[] = [
  {
    categoryName: "Zwierzęta hodowlane",
    categoryImage: "/categories/stockAnimals.jpg",
    categoryQuestions: stockAnimalsQuestions,
    href: "learntyping/",
  },
  {
    categoryName: "Zwierzęta dzikie",
    categoryImage: "/categories/wildAnimals.jpg",
    categoryQuestions: stockAnimalsQuestions,
    href: "learntyping/",
  },
];
