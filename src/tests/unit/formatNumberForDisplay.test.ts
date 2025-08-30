import { formatNumberForDisplay } from '@/utils/functions/formatNumberForDisplay';

describe('formatNumberForDisplay', () => {
  it.each([
    { input: -1_000_000, expected: -1_000_000 },
    { input: -10_000, expected: -10_000 },
    { input: -5_000, expected: -5_000 },
    { input: 0, expected: 0 },
    { input: 9_999, expected: 9_999 }
  ])(
    'returns the number itself for values < 10,000: $input',
    ({ input, expected }) => {
      const result = formatNumberForDisplay(input);
      expect(result).toBe(expected);
      expect(typeof result).toBe('number');
    }
  );

  it.each([
    { input: 10_000, expected: '10.000' },
    { input: 250_000, expected: '250.000' },
    { input: 999_999, expected: '999.999' }
  ])(
    'formats thousands with es-ES separators for $input',
    ({ input, expected }) => {
      const result = formatNumberForDisplay(input);
      expect(result).toBe(expected);
      expect(typeof result).toBe('string');
    }
  );

  it.each([
    { input: 1_000_000, expected: '1,0 Mln' },
    { input: 1_500_000, expected: '1,5 Mln' },
    { input: 25_000_000, expected: '25,0 Mln' },
    { input: 1_499_999, expected: '1,5 Mln' }
  ])(
    "formats millions with one decimal and suffix 'Mln' for $input",
    ({ input, expected }) => {
      const result = formatNumberForDisplay(input);
      expect(result).toBe(expected);
      expect(typeof result).toBe('string');
    }
  );

  it('returns 0 for NaN', () => {
    expect(formatNumberForDisplay(Number.NaN)).toBe(0);
  });

  it('boundary transitions have correct values and types', () => {
    const below = formatNumberForDisplay(9_999);
    const at = formatNumberForDisplay(10_000);
    const atMil = formatNumberForDisplay(1_000_000);

    expect(below).toBe(9_999);
    expect(typeof below).toBe('number');

    expect(at).toBe('10.000');
    expect(typeof at).toBe('string');

    expect(atMil).toBe('1,0 Mln');
    expect(typeof atMil).toBe('string');
  });
});
