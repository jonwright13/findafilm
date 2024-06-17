import { sortArray } from "./sortArray";

const arr = [
  { name: "c", value: 3 },
  { name: "b", value: 2 },
  { name: "a", value: 1 },
];
const orderedArr = [
  { name: "a", value: 1 },
  { name: "b", value: 2 },
  { name: "c", value: 3 },
];

describe("sortArray", () => {
  test("[{name: c, value: 3}, {name: b, value: 2}, {name: a, value: 1}] => [{name: a, value: 1}, {name: b, value: 2}, {name: c, value: 3}]", () => {
    expect(sortArray(arr, "name")).toStrictEqual(orderedArr);
  });

  test("[{name: c, value: 3}, {name: b, value: 2}, {name: a, value: 1}] => [{name: a, value: 1}, {name: b, value: 2}, {name: c, value: 3}]", () => {
    expect(sortArray(arr, "value")).toStrictEqual(orderedArr);
  });
});
