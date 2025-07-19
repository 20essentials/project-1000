// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import clerk from "@clerk/astro";


// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },

  //Deploy normal project
  // base: '/project-1000/',
  // site: 'https://20essentials.github.io/project-1000/'

  //Localhost
  site: 'http://localhost:4321/',
  // server: {
  //   port: 4321,
  // },
  output: 'server',
  adapter: vercel(),
  integrations: [react(), clerk()]
});
