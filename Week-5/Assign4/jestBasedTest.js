// Create a simple Javascript function code for addition, subtraction, and multiplication of 2numbers and write the corresponding Jest based tests for it.

const MathOps = require("./jestTest.js");

describe("Math computation test BDD", () => {
  test("10 + 2 = 12", () => {
    expect(MathOps.add(10, 2)).toBe(12);
  });

  test("100 - 92 = 8", () => {
    expect(MathOps.subtract(100, 92)).toBe(8);
  });

  test("222 x 34 = 7548", () => {
    expect(MathOps.multiply(222, 34)).toBe(7548);
  });
});