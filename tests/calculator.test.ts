import { describe, it, expect } from "vitest";
import { add } from "../src/calculator";

describe("String Calculator", () => {
  it("Return 0 if string is empty", () => {
    expect(add("")).toBe(0);
  });

  it("Return 0 if string has empty spaces", () => {
    expect(add(" ")).toBe(0);
  });

  it("Return sum of single number", () => {
    expect(add("5")).toBe(5);
  });

  it("Return sum of comma-separated values", () => {
    expect(add("5,4,6")).toBe(15);
  });

  it("supports newline as delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("supports custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("throws error on negative number", () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
  });

  it("throws error listing all negative numbers", () => {
    expect(() => add("-1,-2,3")).toThrow("negative numbers not allowed: -1,-2");
  });
});
