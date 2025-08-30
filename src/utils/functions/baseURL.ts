export function baseURL(path: string) {
  return new URL(path.replace(/^\/+/, ''), import.meta.env.SITE).toString();
}
