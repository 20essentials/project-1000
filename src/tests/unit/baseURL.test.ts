import { baseURL } from "@/utils/functions/baseURL";

const SITE = import.meta.env.SITE; 

describe('baseURL', () => {
  it('removes leading slashes from the path', () => {
    expect(baseURL('/test')).toBe(`${SITE}test`);
    expect(baseURL('///test/path')).toBe(`${SITE}test/path`);
    expect(baseURL('test/path')).toBe(`${SITE}test/path`);
  });

  it('handles empty path', () => {
    expect(baseURL('')).toBe(SITE);
    expect(baseURL('/')).toBe(SITE);
  });

  it('combines correctly with nested paths', () => {
    expect(baseURL('/folder/file.txt')).toBe(`${SITE}folder/file.txt`);
    expect(baseURL('folder/file.txt')).toBe(`${SITE}folder/file.txt`);
  });
});
