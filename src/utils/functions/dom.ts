export const $ = <T extends Element = HTMLElement>(el: string) =>
  document.querySelector<T>(el);
export const $$ = <T extends Element = HTMLElement>(el: string) =>
  document.querySelectorAll<T>(el);
