import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
export default defineConfig({
  site: 'https://tuliootorrino.com',
  integrations: [react()],

  buildOptions: {
    site: 'https://tuliootorrino.com',
    sitemap: true,
  },

  devOptions: {
    port: 3000,
  },
});