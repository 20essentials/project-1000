export const $ = (el: string) => document.querySelector(el);
export const $$ = (el: string) => document.querySelectorAll(el);

export function baseUrl(path: string) {
  return new URL(path.replace(/^\/+/, ""), import.meta.env.SITE).toString();
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomISODate(
  from: Date = new Date(2000, 0, 1),
  to: Date = new Date()
): string {
  const pad = (n: number) => n.toString().padStart(2, "0");

  const randomDate = new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime())
  );

  const year = randomDate.getFullYear();
  const month = pad(randomDate.getMonth() + 1);
  const day = pad(randomDate.getDate());
  const hours = pad(randomDate.getHours());
  const minutes = pad(randomDate.getMinutes());
  const seconds = pad(randomDate.getSeconds());

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}
