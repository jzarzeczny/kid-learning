import { Routes } from "utils/routing";

interface GamesInterface {
  gameName: string;
  link: string;
}

export const games: GamesInterface[] = [
  { gameName: "Nauka pisania liter", link: Routes.LearnTyping },
  { gameName: "Nauka czytania", link: Routes.LearnReading },
  { gameName: "Nauka pisania", link: Routes.LearnWriting },
];
