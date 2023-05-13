import { CategoryInterface } from "@interfaces/CategoryInterface";
import { QuestionInterface } from "@interfaces/LetterInterfaces";

export const stockAnimals: QuestionInterface[] = [
  { id: "1", title: "kot", text: "kot", image: "/cat.jpg" },
  { id: "2", title: "pies", text: "pies", image: "/dog.jpg" },
  { id: "3", title: "krowa", text: "krowa", image: "/cow.jpg" },
  { id: "4", title: "owca", text: "owca", image: "/sheep.jpg" },
  { id: "5", title: "kura", text: "kura", image: "/chicken.jpg" },
  { id: "6", title: "indyk", text: "indyk", image: "/turkey.jpg" },
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

export const vehicles: QuestionInterface[] = [
  {
    id: "0",
    title: "motorbike",
    text: "motocykl",
    image: "/vehicles/motorbike.jpg",
  },
  { id: "1", title: "bus", text: "autobus", image: "/vehicles/bus.jpg" },
  {
    id: "2",
    title: "car",
    text: "auto",
    image: "/vehicles/car.jpg",
  },
  {
    id: "3",
    title: "boat",
    text: "statek",
    image: "/vehicles/boat.jpg",
  },
  {
    id: "4",
    title: "bicycle",
    text: "rower",
    image: "/vehicles/bicycle.jpg",
  },
  {
    id: "5",
    title: "helicopter",
    text: "helikopter",
    image: "/vehicles/helicopter.jpg",
  },
  {
    id: "6",
    title: "airplane",
    text: "samolot",
    image: "/vehicles/airplane.jpg",
  },
  {
    id: "7",
    title: "scooter",
    text: "skuter",
    image: "/vehicles/scooter.jpg",
  },
];

export const kitchenItems: QuestionInterface[] = [
  {
    id: "0",
    title: "plate",
    text: "talerz",
    image: "/kitchen/plate.jpg",
    multiSrcSet: true,
  },

  {
    id: "1",
    title: "fork`",
    text: "widelec",
    image: "/kitchen/fork.jpg",
    multiSrcSet: true,
  },

  // {
  //   id: "2",
  //   title: "pan",
  //   text: "patelnia",
  //   image: "/kitchen/pan.jpg",
  //   multiSrcSet: true,
  // },
  // {
  //   id: "3",
  //   title: "strainer",
  //   text: "sito",
  //   image: "/kitchen/strainer.jpg",
  //   multiSrcSet: true,
  // },
  // {
  //   id: "4",
  //   title: "pot",
  //   text: "garnek",
  //   image: "/kitchen/pot.jpg",
  //   multiSrcSet: true,
  // },
  // {
  //   id: "5",
  //   title: "tray",
  //   text: "taca",
  //   image: "/kitchen/tray.jpg",
  //   multiSrcSet: true,
  // },
  // {
  //   id: "6",
  //   title: "mug",
  //   text: "kubek",
  //   image: "/kitchen/mug.jpg",
  //   multiSrcSet: true,
  // },
  // {
  //   id: "7",
  //   title: "grater",
  //   text: "tarka",
  //   image: "/kitchen/grater.jpg",
  //   multiSrcSet: true,
  // },
  // {
  //   id: "8",
  //   title: "colander",
  //   text: "cedzak",
  //   image: "/kitchen/colander.jpg",
  //   multiSrcSet: true,
  // },
  // {
  //   id: "9",
  //   title: "ladle",
  //   text: "chochla",
  //   image: "/kitchen/ladle.jpg",
  //   multiSrcSet: true,
  // },
  // {
  //   id: "10",
  //   title: "straw",
  //   text: "słomka",
  //   image: "/kitchen/straw.jpg",
  //   multiSrcSet: true,
  // },
  // {
  //   id: "11",
  //   title: "apron",
  //   text: "fartuch",
  //   image: "/kitchen/apron.jpg",
  //   multiSrcSet: true,
  // },
];

export const letterLearningData: CategoryInterface[] = [
  {
    categoryName: "Zwierzęta hodowlane",
    categoryImage: "/categories/stockAnimalsCategory.jpg",
    categoryId: "stockAnimals",
  },
  {
    categoryName: "Zwierzęta dzikie",
    categoryImage: "/categories/wildAnimalsCategory.jpg",
    categoryId: "wildAnimals",
  },
  {
    categoryName: "Pojazdy",
    categoryImage: "/categories/vehiclesCategory.jpg",
    categoryId: "vehicles",
  },
  {
    categoryName: "Przedmioty w kuchni",
    categoryImage: "/categories/kitchenCategory.jpg",
    categoryId: "kitchen",
  },
];

export const typeLearningQuestions: { [key: string]: QuestionInterface[] } = {
  stockAnimals: stockAnimals,
  wildAnimals: wildAnimals,
  vehicles,
  kitchenItems,
};
