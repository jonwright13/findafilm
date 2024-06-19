export const getRandNum = (low: number, high: number): number => {
  return Math.max(low, Math.round(Math.random() * high));
};
