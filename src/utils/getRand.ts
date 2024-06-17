import { TitleList } from "../types/types";

export const getRandNum = (low: number, high: number): number => {
  return Math.max(low, Math.round(Math.random() * high));
};

export const getRandIndex = (res: TitleList): number => {
  const rand: number = getRandNum(1, 20);
  const fixer: number = Math.min(rand, res.results.length - 1);
  return fixer;
};
