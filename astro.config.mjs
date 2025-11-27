import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  srcDir: 'src',
  server: {
    port: 4321
  },
  site: 'https://echolia.app'
});
