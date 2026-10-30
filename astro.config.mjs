import { defineConfig } from 'astro/config';

// BASE_PATH is set by the GitHub Pages workflow while the site lives at
// <user>.github.io/<repo>/. Once juliaberchtold.com points here, it becomes '/'.
export default defineConfig({
  site: process.env.SITE_URL || 'https://juliaberchtold.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
