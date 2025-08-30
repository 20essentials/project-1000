import { describe, it, expect } from 'vitest';
import { formatTotalNum } from '@/utils/functions/formatTotalNum';

describe('formatTotalNum', () => {
  it('returns the number as-is if less than 99,999', () => {
    expect(formatTotalNum(0)).toBe(0);
    expect(formatTotalNum(500)).toBe(500);
    expect(formatTotalNum(99_998)).toBe(99_998);
  });

  it('formats numbers between 100,000 and 999,999 with locale string', () => {
    expect(formatTotalNum(100_000)).toBe('100.000');
    expect(formatTotalNum(500_500)).toBe('500.500');
    expect(formatTotalNum(999_999)).toBe('999.999');
  });

  it('formats numbers >= 1,000,000 with "Mln" and one decimal', () => {
    expect(formatTotalNum(1_000_000)).toBe('1,0 Mln');
    expect(formatTotalNum(1_500_000)).toBe('1,5 Mln');
    expect(formatTotalNum(12_345_678)).toBe('12,3 Mln');
    expect(formatTotalNum(2_000_000)).toBe('2,0 Mln');
  });

});
