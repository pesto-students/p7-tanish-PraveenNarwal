const mathOperations = require("./calculator");

describe("arithmetic operations", () => {
  test("sum of numbers", () => {
    expect(mathOperations.sum(1, 1)).toBe(2);
    expect(mathOperations.diff(5, 1)).toBe(4);
    expect(mathOperations.product(1, 2)).toBe(2);
  });
});
