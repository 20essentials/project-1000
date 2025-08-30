import { formatToHHMMSS } from "@/utils/functions/formatToHHMMSS";

describe("formatToHHMMSS", () => {
  it("should format seconds less than 10 with leading zero", () => {
    expect(formatToHHMMSS(5)).toBe("00:05");
  });

  it("should format seconds less than a minute", () => {
    expect(formatToHHMMSS(45)).toBe("00:45");
  });

  it("should format minutes correctly", () => {
    expect(formatToHHMMSS(125)).toBe("02:05");
  });

  it("should format exactly one hour", () => {
    expect(formatToHHMMSS(3600)).toBe("01:00:00");
  });

  it("should format hours, minutes, and seconds", () => {
    expect(formatToHHMMSS(3665)).toBe("01:01:05");
  });

  it("should handle multiple hours", () => {
    expect(formatToHHMMSS(7325)).toBe("02:02:05");
  });

  it("should format large numbers of seconds", () => {
    expect(formatToHHMMSS(24 * 3600 + 61)).toBe("24:01:01");
  });

  it("should format zero correctly", () => {
    expect(formatToHHMMSS(0)).toBe("00:00");
  });
});
