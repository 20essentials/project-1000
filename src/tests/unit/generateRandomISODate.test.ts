import { generateRandomISODate } from "@/utils/functions/generateRandomISODate";

describe("generateRandomISODate", () => {
  it("should return a string in ISO format YYYY-MM-DDTHH:mm:ss", () => {
    const dateStr = generateRandomISODate();
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
    expect(isoRegex.test(dateStr)).toBe(true);
  });

  it("should return a date between the provided range", () => {
    const from = new Date(2020, 0, 1);
    const to = new Date(2020, 11, 31);
    const dateStr = generateRandomISODate(from, to);
    const generatedDate = new Date(dateStr);
    expect(generatedDate.getTime()).toBeGreaterThanOrEqual(from.getTime());
    expect(generatedDate.getTime()).toBeLessThanOrEqual(to.getTime());
  });

  it("should work with default parameters", () => {
    const dateStr = generateRandomISODate();
    const generatedDate = new Date(dateStr);
    expect(generatedDate instanceof Date && !isNaN(generatedDate.getTime())).toBe(true);
  });

  it("should generate different values on multiple calls", () => {
    const date1 = generateRandomISODate();
    const date2 = generateRandomISODate();
    expect(date1).not.toBe(date2);
  });

  it("should generate the exact 'from' date when Math.random is 0", () => {
    const from = new Date(2010, 5, 15, 10, 30, 45);
    const to = new Date(2020, 0, 1);
    const spy = vi.spyOn(Math, "random").mockReturnValue(0);
    const dateStr = generateRandomISODate(from, to);
    const generatedDate = new Date(dateStr);
    expect(generatedDate.getTime()).toBe(from.getTime());
    spy.mockRestore();
  });

  it("should generate the exact 'to' date when Math.random is 1", () => {
    const from = new Date(2010, 5, 15);
    const to = new Date(2015, 10, 20, 23, 59, 59);
    const spy = vi.spyOn(Math, "random").mockReturnValue(1);
    const dateStr = generateRandomISODate(from, to);
    const generatedDate = new Date(dateStr);
    expect(generatedDate.getTime()).toBe(to.getTime());
    spy.mockRestore();
  });

  it("should pad single digit month, day, hours, minutes, seconds with zeros", () => {
    const from = new Date(2001, 0, 1, 1, 1, 1);
    const to = new Date(2001, 0, 1, 1, 1, 1);
    const dateStr = generateRandomISODate(from, to);
    expect(dateStr).toBe("2001-01-01T01:01:01");
  });
});
