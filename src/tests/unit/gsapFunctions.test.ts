import { wrapValue } from "@/utils/gsap/gsapFunctions";
describe('wrapValue', () => {
  it('wraps numbers within the given range', () => {
    const wrap = wrapValue(0, 5);
    expect(wrap(0)).toBe(0);
    expect(wrap(3)).toBe(3);
    expect(wrap(5)).toBe(0);
    expect(wrap(6)).toBe(1);
    expect(wrap(-1)).toBe(4);
  });
});
