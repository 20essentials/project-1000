export function formatNumberForDisplay(num: number) {
  if (num < 10_000) return num;
  if (num >= 10_000 && num <= 999_999) return num.toLocaleString('es-ES');
  if (num >= 1_000_000)
    return `${(num / 1_000_000).toLocaleString('es-ES', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    })} Mln`;
  return 0;
}