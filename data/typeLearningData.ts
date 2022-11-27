import { CategoryInterface } from "@interfaces/CategoryInterface";
import { QuestionInterface } from "@interfaces/LetterInterfaces";

export const stockAnimals: QuestionInterface[] = [
  { id: "1", title: "kot", text: "kot", image: "/stockAnimals/cat.jpg" },
  { id: "2", title: "pies", text: "pies", image: "/stockAnimals/dog.jpg" },
  { id: "3", title: "krowa", text: "krowa", image: "/stockAnimals/cow.jpg" },
  { id: "4", title: "owca", text: "owca", image: "/stockAnimals/sheep.jpg" },
  { id: "5", title: "kura", text: "kura", image: "/stockAnimals/chicken.jpg" },
  { id: "6", title: "indyk", text: "indyk", image: "/stockAnimals/turkey.jpg" },
];

export const wildAnimals: QuestionInterface[] = [
  { id: "1", title: "zebra", text: "zebra", image: "/wildAnimals/zebra.jpg" },
  { id: "2", title: "lew", text: "lew", image: "/wildAnimals/lion.jpg" },
  { id: "3", title: "dzik", text: "dzik", image: "/wildAnimals/boar.jpg" },
  {
    id: "4",
    title: "orka",
    text: "orka",
    image: "/wildAnimals/killerWhale.jpg",
  },
  {
    id: "5",
    title: "delfin",
    text: "delfin",
    image: "/wildAnimals/dolphin.jpg",
  },
  { id: "6", title: "sarna", text: "sarna", image: "/wildAnimals/roe.jpg" },
  {
    id: "7",
    title: "kangur",
    text: "kangur",
    image: "/wildAnimals/kangaroo.jpg",
  },
  { id: "8", title: "kret", text: "kret", image: "/wildAnimals/mole.jpg" },
  { id: "9", title: "lama", text: "lama", image: "/wildAnimals/lama.jpg" },
  { id: "10", title: "wilk", text: "wilk", image: "/wildAnimals/wolf.jpg" },
  { id: "11", title: "lis", text: "lis", image: "/wildAnimals/fox.jpg" },
  { id: "12", title: "panda", text: "panda", image: "/wildAnimals/panda.jpg" },
  { id: "13", title: "lemur", text: "lemur", image: "/wildAnimals/lemur.jpg" },
];

export const letterLearningData: CategoryInterface[] = [
  {
    categoryName: "Zwierzęta hodowlane",
    categoryImage: "/categories/stockAnimals.jpg",
    categoryId: "stockAnimals",
  },
  {
    categoryName: "Zwierzęta dzikie",
    categoryImage: "/categories/wildAnimals.jpg",
    categoryId: "wildAnimals",
  },
];

export const typeLearningQuestions: { [key: string]: QuestionInterface[] } = {
  stockAnimals: stockAnimals,
  wildAnimals: wildAnimals,
};
