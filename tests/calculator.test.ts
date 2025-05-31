import { describe, it, expect } from "vitest";
import { add } from "../src/calculator";

describe("String Calculator", () => {
  it("Return 0 if string is empty", () => {
    expect(add("")).toBe(0);
  });

  it("Return 0 if string has empty spaces", () => {
    expect(add(" ")).toBe(0);
  });
});
