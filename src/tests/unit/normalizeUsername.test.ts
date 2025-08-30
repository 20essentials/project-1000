import { describe, it, expect } from "vitest";
import { normalizeUsername } from "@/utils/functions/normalizeUsername";

describe("normalizeUsername()", () => {
  it("should return the username without truncation if shorter than maxLength", () => {
    expect(normalizeUsername("john_doe", 10)).toBe("john");
  });

  it("should truncate the username and append '...' if longer than maxLength", () => {
    expect(normalizeUsername("longusername_here", 8)).toBe("longu...");
  });

  it("should not truncate if username length equals maxLength", () => {
    expect(normalizeUsername("exactlen", 8)).toBe("exactlen");
  });

  it("should handle usernames without underscores", () => {
    expect(normalizeUsername("alice", 10)).toBe("alice");
  });

  it("should return empty string if rawUsername is empty", () => {
    expect(normalizeUsername("", 5)).toBe("");
  });

  it("should truncate correctly when maxLength is very small", () => {
    expect(normalizeUsername("abcdef", 3)).toBe("...");
    expect(normalizeUsername("abcdef", 2)).toBe("...");
  });

  it("should keep only the part before the first underscore", () => {
    expect(normalizeUsername("bob_smith_extra", 20)).toBe("bob");
  });
});
