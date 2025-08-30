import { describe, it, expect } from "vitest";
import { modClamp } from "@/utils/functions/modClamp";

describe('modClamp', () => {
  it('returns left % right when left is less than right', () => {
    expect(modClamp(0, 5)).toBe(0);   // left = 0
    expect(modClamp(1, 5)).toBe(1);
    expect(modClamp(4, 5)).toBe(4);   // left just below right
    expect(modClamp(7, 10)).toBe(7);
    expect(modClamp(0, 1)).toBe(0);   // edge case right = 1
  });

  it('returns right when left is greater than or equal to right', () => {
    expect(modClamp(5, 5)).toBe(5);   // left = right
    expect(modClamp(6, 5)).toBe(5);   // left > right
    expect(modClamp(10, 7)).toBe(7);
    expect(modClamp(100, 50)).toBe(50);
  });

  it('works with zero as right', () => {
    expect(modClamp(0, 0)).toBe(0);   // left = right = 0
    expect(modClamp(5, 0)).toBe(0);   // left > right
  });

  it('works with large numbers', () => {
    expect(modClamp(999, 1000)).toBe(999);
    expect(modClamp(1000, 999)).toBe(999);
    expect(modClamp(123456, 654321)).toBe(123456);
  });
});
