/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    include: [
      'src/tests/unit/**/*.{test,spec}.{js,jsx,ts,tsx}',
      'src/tests/integration/**/*.{test,spec}.{js,jsx,ts,tsx}'
    ],
    exclude: ['src/tests/e2e/**/*'],
    globals: true,
    environment: 'happy-dom'
  }
});
