import { getData } from "./UserChart";

test('getData returns an array of numbers', () => {
  const data = getData();
  expect(Array.isArray(data)).toBe(true);
  expect(data).toEqual([50, 45, 29, 38, 12, 42, 23, 25, 46, 10, 5, 23]);
});