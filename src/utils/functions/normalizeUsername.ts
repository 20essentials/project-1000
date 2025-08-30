export function normalizeUsername(rawUsername: string, maxLength: number): string {
  const username = rawUsername.split('_')[0];
  if (maxLength <= 3) return "...";
  return username.length > maxLength
    ? `${username.slice(0, maxLength - 3)}...`
    : username;
}
