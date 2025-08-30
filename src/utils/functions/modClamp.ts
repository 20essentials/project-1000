
export function modClamp(left: number, right: number) {
  return left < right ? left % right : right;
}