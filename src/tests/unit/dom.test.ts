import { describe, it, expect, beforeEach } from "vitest";
import { $, $$ } from "@/utils/functions/dom";

describe("$", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="app">
        <span class="item">One</span>
        <button class="btn">Click</button>
        <input type="text" class="input" value="hello" />
      </div>
    `;
  });

  it("should return the first matching element", () => {
    const el = $(".item");
    expect(el).toBeInstanceOf(HTMLSpanElement);
    expect(el?.textContent).toBe("One");
  });

  it("should return null if no element matches", () => {
    const el = $(".not-found");
    expect(el).toBeNull();
  });

  it("should allow specifying a generic type", () => {
    const el = $("#app") as HTMLDivElement | null;
    expect(el?.id).toBe("app");
  });

  it("should correctly infer type when using <HTMLButtonElement>", () => {
    const btn = $<HTMLButtonElement>(".btn");
    expect(btn).toBeInstanceOf(HTMLButtonElement);
    expect(btn?.tagName).toBe("BUTTON");
  });

  it("should correctly infer type when using <HTMLInputElement>", () => {
    const input = $<HTMLInputElement>(".input");
    expect(input?.value).toBe("hello");
    expect(input).toBeInstanceOf(HTMLInputElement);
  });

  it("should return null with generic type if element not found", () => {
    const link = $<HTMLAnchorElement>(".no-link");
    expect(link).toBeNull();
  });
});

describe("$$", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul>
        <li class="list-item">A</li>
        <li class="list-item">B</li>
        <li class="list-item">C</li>
      </ul>
    `;
  });

  it("should return a NodeList of matching elements", () => {
    const els = $$(".list-item");
    expect(els).toHaveLength(3);
    expect(els[0]).toBeInstanceOf(HTMLLIElement);
    expect(els[1].textContent).toBe("B");
  });

  it("should return an empty NodeList if no elements match", () => {
    const els = $$(".not-found");
    expect(els).toHaveLength(0);
  });

  it("should allow iterating over the NodeList", () => {
    const els = $$(".list-item");
    const texts = Array.from(els).map(el => el.textContent);
    expect(texts).toEqual(["A", "B", "C"]);
  });
});
