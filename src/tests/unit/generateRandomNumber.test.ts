import { generateRandomNumber } from "@/utils/functions/generateRandomNumber";

describe("generateRandomNumber", () => {
  it("should return a number within the given range", () => {
    const result = generateRandomNumber(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it("should return the exact min when min and max are the same", () => {
    const result = generateRandomNumber(5, 5);
    expect(result).toBe(5);
  });

  it("should return different numbers across multiple calls (not always the same)", () => {
    const results = new Set(
      Array.from({ length: 20 }, () => generateRandomNumber(1, 5))
    );
    expect(results.size).toBeGreaterThan(1);
  });

  it("should include both boundaries in the range", () => {
    const values = Array.from({ length: 1000 }, () =>
      generateRandomNumber(1, 2)
    );
    expect(values).toContain(1);
    expect(values).toContain(2);
  });

  it("should handle negative ranges correctly", () => {
    const result = generateRandomNumber(-5, -1);
    expect(result).toBeGreaterThanOrEqual(-5);
    expect(result).toBeLessThanOrEqual(-1);
  });
});
