import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import clerk from '@clerk/astro';
import { envField } from 'astro/config';
import { id_user_testing } from './src/utils/consts/userIdTesting';
// import { id_user_testing } from './src/utils/consts/userIdTesting';

export default defineConfig({
  build: {
    assets: 'static'
  },
  env: {
    schema: {
      PUBLIC_CLERK_PUBLISHABLE_KEY: envField.string({
        context: 'server',
        access: 'secret'
      }),
      CLERK_SECRET_KEY: envField.number({
        context: 'server',
        access: 'secret'
      }),
      SHOW_PRIVATE_DATA: envField.boolean({
        context: 'client',
        access: 'public'
      }),
      THERE_IS_E2E: envField.boolean({ context: 'client', access: 'public' })
    }
  },
  //Localhost
  // site: 'http://localhost:4321/',
  site: 'https://project-1000-t1k-tok-minimalist.vercel.app/',
  output: 'server',
  server: {
    open: `/?userId=${id_user_testing}`
    // open: `/?search=hello`,
  },
  adapter: vercel(),
  integrations: [react(), clerk()]
});
