import { getRandNum } from "./getRand";

describe("getRandNum", () => {
  test("rand within bounds", () => {
    const low = 0;
    const high = 10;
    const rand = getRandNum(low, high);
    const check = rand >= low && rand <= high;
    expect(check).toBe(true);
  });

  test("rand within big bounds", () => {
    const low = -1000;
    const high = 1000;
    const rand = getRandNum(low, high);
    const check = rand >= low && rand <= high;
    expect(check).toBe(true);
  });
});
