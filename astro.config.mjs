import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  srcDir: 'src',
  server: {
    port: 4322
  },
  site: 'https://echolia.com'
});
