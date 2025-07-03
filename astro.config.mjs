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
  // base: '/project-000-948/',
  // site: 'https://20essentials.github.io/project-000-948/'

  //Deploy 20 Projects
  // base: '/20-projects-with-nunjucks/',
  // site: 'https://20essentials.github.io/20-projects-with-nunjucks/'

  //Localhost
  site: 'http://localhost:4321/',
  output: 'server',
  adapter: vercel(),
  integrations: [react(), clerk()]
});
