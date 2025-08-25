import { sleep } from '@/utils/functions/sleep';

describe('sleep function', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return a promise', () => {
    const result = sleep(1000);
    expect(result).toBeInstanceOf(Promise);
  });

  it('should resolve after the given time', async () => {
    const promise = sleep(2000);
    vi.advanceTimersByTime(2000);
    await expect(promise).resolves.toBeUndefined();
  });

  it('should not resolve before the given time', async () => {
    const promise = sleep(3000);
    vi.advanceTimersByTime(2000);
    let resolved = false;
    promise.then(() => (resolved = true));
    await Promise.resolve(); 
    expect(resolved).toBe(false);
  });

  it('should work with zero milliseconds', async () => {
    const promise = sleep(0);
    vi.advanceTimersByTime(0);
    await expect(promise).resolves.toBeUndefined();
  });

  it('should work with multiple calls independently', async () => {
    const promise1 = sleep(1000);
    const promise2 = sleep(2000);

    vi.advanceTimersByTime(1000);
    await expect(promise1).resolves.toBeUndefined();
    let resolved2 = false;
    promise2.then(() => (resolved2 = true));
    expect(resolved2).toBe(false);

    vi.advanceTimersByTime(1000);
    await expect(promise2).resolves.toBeUndefined();
  });
});
