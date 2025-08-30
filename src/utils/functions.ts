export function generateTotalNum(num: number) {
  if (num < 99_999) return num;
  if (num >= 100_000 && num <= 999_999) return num.toLocaleString('es-ES');
  if (num >= 1_000_000)
    return `${(num / 1_000_000).toLocaleString('es-ES', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    })} Mln`;
  return 0;
}
